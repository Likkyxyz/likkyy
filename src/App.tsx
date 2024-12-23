import React from 'react';
import abstractImage from './assets/images/abstract.jpg';

function App() {
  return (
    <div className="min-h-screen bg-[#5ce1e6] flex flex-col items-center">
      {/* Buy Button */}
      <a 
        href="https://pump.fun/coin/zdMkZJgjff5GJ2BLLLSQmRzSq1Ca56DczGpN88Epump" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-6 bg-white hover:bg-gray-100 text-black text-xl font-bold py-4 px-12 rounded-full shadow-lg transition-transform hover:scale-105 inline-block"
      >
        BUY $LIKKY
      </a>

      {/* Centered Image */}
      <div className="flex-1 flex items-center justify-center p-4">
        <img
          src={abstractImage}
          alt="Artistic abstract"
          className="rounded-2xl shadow-2xl w-[500px] h-[500px] object-cover"
        />
      </div>
    </div>
  );
}

export default App;