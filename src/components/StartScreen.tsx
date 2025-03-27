import React from 'react';
import { Wand2 } from 'lucide-react';

interface StartScreenProps {
  onStartGame: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStartGame }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6 p-4 bg-purple-100 rounded-full">
        <Wand2 size={48} className="text-purple-600" />
      </div>
      
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Harry Potter Trivia Quiz</h1>
      <p className="text-gray-600 mb-6">Test your knowledge of the wizarding world!</p>
      
      <div className="bg-gray-100 p-4 rounded-md mb-8 text-left">
        <h2 className="font-bold text-gray-800 mb-2">How to Play:</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Answer 10 questions about the Harry Potter universe</li>
          <li>Select the correct answer from the options provided</li>
          <li>See your final score at the end</li>
          <li>Challenge yourself to become a wizarding expert!</li>
        </ul>
      </div>
      
      <button
        onClick={onStartGame}
        className="bg-purple-600 text-white py-3 px-8 rounded-md hover:bg-purple-700 transition-colors text-lg font-medium"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
