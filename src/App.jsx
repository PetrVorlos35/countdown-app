import { useState, useEffect } from 'react';
import Countdown from './Countdown';
import Quiz from './Quiz';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';
import './App.css';

function App() {
  const [view, setView] = useState('countdown');
  const [visible, setVisible] = useState(true);
  const date = "2025-04-11T08:00:00";

  const handleChangeView = (newView) => {
    if (newView === view) return;
    setVisible(false);
    setTimeout(() => {
      setView(newView);
      setVisible(true);
    }, 300); 
  };

  return (
    <>
      <CustomCursor />
      <Navbar setView={handleChangeView} currentView={view} />
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 transition-opacity duration-300">
        <div
          key={view}
          className={`transition-opacity duration-300 ${
            visible ? 'opacity-100' : 'opacity-0'
          } w-full flex justify-center`}
        >
          {view === 'countdown' && <Countdown targetDate={date} />}
          {view === 'quiz' && <Quiz />}
        </div>
      </div>
    </>
  );
}

export default App;
