import { useState } from "react";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
      {!started ? (
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">🚀 Roar Mining</h1>
          <p className="text-lg text-gray-200">
            Welcome to the official Roar Token Mining Mini App!
          </p>
          <button
            onClick={() => setStarted(true)}
            className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-2xl shadow-lg hover:bg-yellow-400 transition"
          >
            Roar
          </button>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">⛏ Mining Started!</h2>
          <p className="text-gray-200">Your mining dashboard is coming soon...</p>
        </div>
      )}
    </div>
  );
}
