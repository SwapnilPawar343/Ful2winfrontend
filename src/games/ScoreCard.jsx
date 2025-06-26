import React from 'react';
import { ImCancelCircle } from "react-icons/im";
import { Link, Navigate } from 'react-router-dom';

const ScoreCard = ({ userId, score, roomId, gameName, onBackToLobby }) => {
  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-blue-700">🏆 Game Score</h2>
        <Link
          to="/tournaments"
          title="Back to Lobby"
          onClick={onBackToLobby}
          className="text-red-500 hover:text-red-700 ml-9 transition-all text-xl"
        >
          <ImCancelCircle />
        </Link>
      </div>

      {/* Game Details */}
      <div className="text-gray-700 space-y-2 text-left">
        <p><span className="font-semibold">Player ID:</span> {userId}</p>
        <p><span className="font-semibold">Room ID:</span> {roomId}</p>
        <p><span className="font-semibold">Game:</span> {gameName}</p>
      </div>

      {/* Score */}
      <div className="mt-6">
        <p className="text-4xl font-extrabold text-green-600 text-center">
          {score}
        </p>
        <p className="text-center text-sm text-gray-500 mt-1">Your Final Score</p>
      </div>

      {/* Actions */}
      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-200"
        >
          🔁 Play Again
        </button>
      
      </div>
    </div>
  );
};

export default ScoreCard;
