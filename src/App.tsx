import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-black">Mental Math Practice</h1>
      <div className="flex flex-wrap justify-around w-full max-w-2xl space-y-4 md:space-y-0">
        <button 
          className="flex items-center justify-center w-32 h-32 p-2 border border-black text-black font-bold rounded-lg focus:outline-none disabled:opacity-50"
          disabled
        >
          Timed Mode (Coming Soon)
        </button>
        <button 
          className="flex items-center justify-center w-32 h-32 p-2 border border-black text-black font-bold rounded-lg focus:outline-none"
          onClick={() => alert('Navigate to Endless Mode')}
        >
          Endless Casual Mode
        </button>
      </div>
    </div>
  );
};

export default App;

