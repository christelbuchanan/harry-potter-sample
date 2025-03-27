# Harry Potter Trivia Quiz

![Harry Potter Trivia Quiz](https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)

A magical interactive quiz application that tests your knowledge of the Harry Potter universe. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Interactive Quiz Experience**: Answer 10 challenging questions about the wizarding world
- **Immediate Feedback**: Get instant feedback on your answers with explanations
- **Progress Tracking**: Monitor your progress through the quiz
- **Beautiful UI**: Enjoy a magical purple-themed interface with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Score Assessment**: Receive a personalized evaluation based on your final score

## 🚀 Technologies Used

- **React**: Frontend library for building the user interface
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling and responsive design
- **Vite**: For fast development and optimized builds
- **Lucide React**: For beautiful, minimal icons

## 🧙‍♂️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/harry-potter-trivia.git
   cd harry-potter-trivia
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Project Structure

```
harry-potter-trivia/
├── public/
├── src/
│   ├── components/
│   │   ├── ProgressBar.tsx
│   │   ├── QuizCard.tsx
│   │   ├── ResultScreen.tsx
│   │   └── StartScreen.tsx
│   ├── data/
│   │   └── questions.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── types.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 🎮 How to Play

1. Click the "Start Quiz" button on the welcome screen
2. Read each question carefully and select your answer
3. Click "Submit Answer" to check if you're correct
4. Read the explanation and click "Next Question" to continue
5. After answering all questions, view your final score and assessment
6. Click "Play Again" to restart the quiz

## 🧪 Quiz Content

The quiz contains 10 questions covering various aspects of the Harry Potter universe:

- Characters
- Magical objects
- Spells
- Locations
- Creatures
- And more!

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

### Adding More Questions

To add more questions, edit the `src/data/questions.ts` file following the existing format:

```typescript
{
  id: number,
  question: string,
  options: string[],
  correctAnswer: string,
  explanation: string
}
```

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🎨 Customization

You can customize the app by:
- Changing the color theme in the Tailwind configuration
- Adding more questions to the quiz
- Modifying the scoring system
- Adding sound effects for correct/incorrect answers

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- J.K. Rowling for creating the magical world of Harry Potter
- [Lucide Icons](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Unsplash](https://unsplash.com/) for the header image

---

Created with ❤️ by [Your Name]
