import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(40); 

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, input, textarea, select, label')) {
        setCursorSize(50); 
      }
    };

    const handleMouseOut = () => {
      setCursorSize(40); 
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const lerp = (start, end, factor) => start + (end - start) * factor;
    let animationFrame;

    const animate = () => {
      setSmoothPos((prev) => ({
        x: lerp(prev.x, position.x, 0.1), 
        y: lerp(prev.y, position.y, 0.1),
      }));
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
        }}
      />

      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          transform: `translate(${smoothPos.x - cursorSize / 2}px, ${smoothPos.y - cursorSize / 2}px)`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          borderRadius: '50%',
          backdropFilter: 'invert(100%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
