import React from 'react';
import { Trophy, RotateCcw } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestartGame: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, totalQuestions, onRestartGame }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = '';
  let badgeColor = '';
  
  if (percentage >= 90) {
    message = "Outstanding! You're a true Hogwarts scholar!";
    badgeColor = 'bg-yellow-100 text-yellow-800';
  } else if (percentage >= 70) {
    message = "Exceeds Expectations! You know your wizarding facts!";
    badgeColor = 'bg-blue-100 text-blue-800';
  } else if (percentage >= 50) {
    message = "Acceptable! You've got some magical knowledge.";
    badgeColor = 'bg-green-100 text-green-800';
  } else {
    message = "Needs improvement. Perhaps another year at Hogwarts?";
    badgeColor = 'bg-red-100 text-red-800';
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full text-center">
      <div className="mb-6">
        <div className="mx-auto w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full">
          <Trophy size={40} className="text-purple-600" />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Quiz Complete!</h2>
      
      <div className="mb-6">
        <div className="text-5xl font-bold text-purple-600 mb-2">
          {score}/{totalQuestions}
        </div>
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${badgeColor}`}>
          {percentage}%
        </div>
      </div>
      
      <p className="text-gray-700 mb-8">{message}</p>
      
      <button
        onClick={onRestartGame}
        className="flex items-center justify-center mx-auto bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-colors"
      >
        <RotateCcw size={18} className="mr-2" />
        Play Again
      </button>
    </div>
  );
};

export default ResultScreen;
