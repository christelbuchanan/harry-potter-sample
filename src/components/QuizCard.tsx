import React from 'react';
import { Question } from '../types';

interface QuizCardProps {
  question: Question;
  selectedAnswer: string | null;
  answerSubmitted: boolean;
  onSelectAnswer: (answer: string) => void;
  onSubmitAnswer: () => void;
  onNextQuestion: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  selectedAnswer,
  answerSubmitted,
  onSelectAnswer,
  onSubmitAnswer,
  onNextQuestion,
}) => {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{question.question}</h2>
      
      <div className="space-y-3 mb-6">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => !answerSubmitted && onSelectAnswer(option)}
            disabled={answerSubmitted}
            className={`w-full text-left p-3 rounded-md transition-colors ${
              answerSubmitted && option === question.correctAnswer
                ? 'bg-green-100 border-2 border-green-500'
                : answerSubmitted && option === selectedAnswer && !isCorrect
                ? 'bg-red-100 border-2 border-red-500'
                : option === selectedAnswer
                ? 'bg-purple-100 border-2 border-purple-500'
                : 'bg-gray-100 hover:bg-purple-50 border-2 border-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {answerSubmitted ? (
        <div className="mb-4">
          <div className={`p-4 rounded-md ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            <p className="font-semibold">{isCorrect ? '✨ Correct!' : '❌ Incorrect!'}</p>
            <p className="mt-1">{question.explanation}</p>
          </div>
          <button
            onClick={onNextQuestion}
            className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
          >
            Next Question
          </button>
        </div>
      ) : (
        <button
          onClick={onSubmitAnswer}
          disabled={!selectedAnswer}
          className={`w-full py-2 px-4 rounded-md transition-colors ${
            selectedAnswer
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Submit Answer
        </button>
      )}
    </div>
  );
};

export default QuizCard;
