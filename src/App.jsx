import { useEffect, useState } from 'react';
import Countdown from './Countdown';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';
import './App.css';

function App() {
  const [view, setView] = useState('countdown');
  const [visible, setVisible] = useState(true);
  const [selectedDate, setSelectedDate] = useState(() => {
    // Načte vybrané datum z localStorage, pokud je k dispozici
    const storedDate = localStorage.getItem('selectedDate');
    return storedDate ? storedDate : "2025-04-11T08:00:00"; // Defaultní datum
  });

  const handleChangeView = (newView) => {
    if (newView === view) return;
    setVisible(false);
    setTimeout(() => {
      setView(newView);
      setVisible(true);
    }, 300);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    localStorage.setItem('selectedDate', newDate); // Uloží nové datum do localStorage
  };

  const getNextValidDate = () => {
    const allDates = [
      "2025-04-11T08:00:00", "2025-04-14T08:00:00", "2025-05-02T08:00:00", 
      "2025-05-05T08:00:00", "2025-05-06T08:00:00", "2025-05-14T08:00:00", 
      "2025-05-19T08:00:00"
    ];
    
    const currentDate = new Date();
    let nextValidDate = allDates.find(date => new Date(date) > currentDate); // Najde první budoucí datum
    return nextValidDate || allDates[0]; // Pokud není žádné platné datum, vrátí první v seznamu
  };

  useEffect(() => {
    const storedDate = localStorage.getItem('selectedDate');
    const nextValidDate = getNextValidDate();
    
    // Pokud je aktuální vybrané datum již prošlé, nastavíme nové nadcházející datum
    if (storedDate && new Date(storedDate) < new Date()) {
      setSelectedDate(nextValidDate);
      localStorage.setItem('selectedDate', nextValidDate);
    }
  }, []);

  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar setView={handleChangeView} currentView={view} />
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 transition-opacity duration-300">
        <div
          key={view}
          className={`transition-opacity duration-300 ${
            visible ? 'opacity-100' : 'opacity-0'
          } w-full flex justify-center flex-col items-center`}
        >
          {view === 'countdown' && (
            <>
              <div className="mb-4">
                <label className="text-sm text-gray-400">Vyberte maturitu:</label>
                <select
                  onChange={handleDateChange}
                  value={selectedDate}
                  className="bg-gray-800 text-white p-2 rounded mt-2"
                >
                  <option value="2025-04-11T08:00:00">11. dubna 2025 - slohovka čeština</option>
                  <option value="2025-04-14T08:00:00">14. dubna 2025 - slohovka angličtina</option>
                  <option value="2025-05-02T08:00:00">2. května 2025 - didakťák matika a angličtina</option>
                  <option value="2025-05-05T08:00:00">5. května 2025 - didakťák čeština</option>
                  <option value="2025-05-06T08:00:00">6. května 2025 - didakťák matika+</option>
                  <option value="2025-05-14T08:00:00">14. května 2025 - obhajoby</option>
                  <option value="2025-05-19T08:00:00">19. května 2025 - ústní zkoušky</option>
                </select>
              </div>
              <Countdown targetDate={selectedDate} />
            </>
          )}
          {view === 'quiz' && <Quiz />}
        </div>
      </div>
    </>
  );
}

export default App;
