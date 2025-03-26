const Navbar = ({ setView, currentView }) => {
    return (
      <nav className="w-full px-6 py-4 bg-gray-900 text-white shadow-md sticky top-0 z-40 flex justify-between items-center">
        <h1 className="text-xl font-bold">🎓 Maturitní Countdown</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setView('countdown')}
            className={`text-sm cursor-pointer hover:underline ${currentView === 'countdown' ? 'font-bold text-blue-400' : ''}`}
          >
            Odpočet
          </button>
          <button
            onClick={() => setView('quiz')}
            className={`text-sm cursor-pointer hover:underline ${currentView === 'quiz' ? 'font-bold text-blue-400' : ''}`}
          >
            Kvíz
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  