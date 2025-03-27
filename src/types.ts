export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  showResult: boolean;
  selectedAnswer: string | null;
  answerSubmitted: boolean;
  gameStarted: boolean;
  gameCompleted: boolean;
}
