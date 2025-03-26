import { useEffect, useState } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [finished, setFinished] = useState(false);
  const [mounted, setMounted] = useState(false);
  const messages = [
    "Už to skoro máš!",
    "Z maturity si nic nedělej!",
    "Dýchej. Všechno bude OK.",
    "Půlka je za tebou!",
    "Kafe a jedeš dál!",
    "Máš na to!",
    "Maturita je jen formalita 😉"
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const changeQuote = () => {
      const random = messages[Math.floor(Math.random() * messages.length)];
      setQuote(random);
    };

    changeQuote(); // první hned
    const quoteInterval = setInterval(changeQuote, 8000);

    return () => clearInterval(quoteInterval);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        alert("🫣 Klid! To dáš.");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Effect to update the countdown every second
  useEffect(() => {
    setMounted(true);
    setFinished(false); // reset finished state when date changes

    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);

      if (Object.keys(updated).length === 0) {
        setFinished(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); // Add targetDate to the dependency array

  return (
<div
  className={`text-center text-white transition-opacity duration-1000 ${
    mounted ? 'opacity-100' : 'opacity-0'
  } px-4 py-10`}
>
  <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Čas do maturit</h2>

  <p className="text-base md:text-lg text-gray-400 mb-8">
    Slohovka:{" "}
    <span className="font-semibold text-white">
      {new Date(targetDate).toLocaleDateString("cs-CZ")}
    </span>
  </p>

  {Object.keys(timeLeft).length ? (
    <div className="flex flex-wrap justify-center gap-6">
      {[
        { label: "Dní", value: timeLeft.days },
        { label: "Hodin", value: timeLeft.hours },
        { label: "Minut", value: timeLeft.minutes },
        { label: "Sekund", value: timeLeft.seconds },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-800/70 backdrop-blur-md border border-gray-700 p-5 rounded-xl w-24 md:w-28 text-center shadow-md transition-transform duration-300 hover:scale-105"
        >
          <div className="text-3xl md:text-4xl font-bold">{item.value}</div>
          <div className="text-xs uppercase tracking-wide mt-1 text-gray-300">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-red-500 text-xl md:text-2xl mt-6 animate-bounce">
      Čas vypršel!
    </div>
  )}

  {finished && (
    <div className="text-4xl mt-6 animate-bounce">
      {["🎉", "🪅", "🥳", "🎓", "🔥"].map((e, i) => (
        <span key={i}>{e}</span>
      ))}
    </div>
  )}

  <p className="mt-10 text-lg md:text-xl italic text-gray-400 transition-opacity duration-500 max-w-2xl mx-auto">
    {quote}
  </p>
</div>

  );
};

export default Countdown;
