import React, { useState, useReducer } from 'react';
import { Wand2 } from 'lucide-react';
import { questions } from './data/questions';
import { GameState } from './types';
import QuizCard from './components/QuizCard';
import StartScreen from './components/StartScreen';
import ResultScreen from './components/ResultScreen';
import ProgressBar from './components/ProgressBar';

type GameAction =
  | { type: 'START_GAME' }
  | { type: 'SELECT_ANSWER'; payload: string }
  | { type: 'SUBMIT_ANSWER' }
  | { type: 'NEXT_QUESTION' }
  | { type: 'RESTART_GAME' };

const initialState: GameState = {
  currentQuestionIndex: 0,
  score: 0,
  showResult: false,
  selectedAnswer: null,
  answerSubmitted: false,
  gameStarted: false,
  gameCompleted: false,
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...initialState,
        gameStarted: true,
      };
    case 'SELECT_ANSWER':
      return {
        ...state,
        selectedAnswer: action.payload,
      };
    case 'SUBMIT_ANSWER':
      const currentQuestion = questions[state.currentQuestionIndex];
      const isCorrect = state.selectedAnswer === currentQuestion.correctAnswer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        answerSubmitted: true,
      };
    case 'NEXT_QUESTION':
      const isLastQuestion = state.currentQuestionIndex === questions.length - 1;
      if (isLastQuestion) {
        return {
          ...state,
          gameCompleted: true,
        };
      }
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedAnswer: null,
        answerSubmitted: false,
      };
    case 'RESTART_GAME':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const {
    currentQuestionIndex,
    score,
    selectedAnswer,
    answerSubmitted,
    gameStarted,
    gameCompleted,
  } = state;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <header className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <Wand2 className="text-purple-600 mr-2" size={28} />
            <h1 className="text-2xl font-bold text-purple-800">Harry Potter Trivia</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full">
          {!gameStarted ? (
            <StartScreen onStartGame={() => dispatch({ type: 'START_GAME' })} />
          ) : gameCompleted ? (
            <ResultScreen 
              score={score} 
              totalQuestions={questions.length} 
              onRestartGame={() => dispatch({ type: 'RESTART_GAME' })} 
            />
          ) : (
            <div className="flex flex-col items-center">
              <ProgressBar 
                currentQuestion={currentQuestionIndex + 1} 
                totalQuestions={questions.length} 
              />
              
              <QuizCard
                question={currentQuestion}
                selectedAnswer={selectedAnswer}
                answerSubmitted={answerSubmitted}
                onSelectAnswer={(answer) => dispatch({ type: 'SELECT_ANSWER', payload: answer })}
                onSubmitAnswer={() => dispatch({ type: 'SUBMIT_ANSWER' })}
                onNextQuestion={() => dispatch({ type: 'NEXT_QUESTION' })}
              />
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Harry Potter Trivia Quiz</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
