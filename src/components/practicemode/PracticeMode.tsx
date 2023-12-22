import { useState } from 'react';

// Sample questions with a template and a solution function
const questions = [
  {
    template: (a: number, b: number) =>
      `Share price grew from $${a} to $${b}. What's the percentage increase?`,
    solution: (a: number, b: number) => ((b - a) / a) * 100
  }
  // TODO: Add more question templates and solutions here
];

const generateQuestion = () => {
  const questionIndex = Math.floor(Math.random() * questions.length);
  const questionTemplate = questions[questionIndex];
  const value1 = Math.floor(Math.random() * 100);
  const value2 = Math.floor(Math.random() * 100);
  const correctAnswer = questionTemplate.solution(value1, value2);
  const possibleAnswers = [correctAnswer, ...generateIncorrectAnswers(correctAnswer)];
  // Shuffle the possible answers to randomize their order
  possibleAnswers.sort(() => Math.random() - 0.5);
  const questionText = questionTemplate.template(value1, value2);
  return { questionText, correctAnswer, possibleAnswers };
};

const generateIncorrectAnswers = (correctAnswer: number, count: number = 3) => {
  const incorrectAnswers = new Set<number>();
  while (incorrectAnswers.size < count) {
    // Generate a random percentage between -50% and +100% TODO: Think about a better incorrect answers generating algorithm
    const randomPercentage = Math.random() * 1.5 - 0.5;
    let incorrectAnswer = correctAnswer * (1 + randomPercentage);
    incorrectAnswer = parseFloat(incorrectAnswer.toFixed(2));
    if (incorrectAnswer !== correctAnswer) {
      incorrectAnswers.add(incorrectAnswer);
    }
  }

  return Array.from(incorrectAnswers);
};

export default function PracticeMode() {
  const [currentQuestion, setCurrentQuestion] = useState(generateQuestion());
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [questionCount, setQuestionCount] = useState(0);

  const handleAnswerSelect = (answer: number) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correctAnswer) {
      setCurrentQuestion(generateQuestion());
      setQuestionCount(questionCount + 1);
      setSelectedAnswer(null);
    } else {
      //TODO: Implement blinking red effect here
    }
  };

  console.log(currentQuestion);
  console.log(selectedAnswer);
  console.log(questionCount);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 gap-6">
      <h2>{currentQuestion.questionText}</h2>
      <div className="grid grid-cols-2 gap-4">
        {currentQuestion.possibleAnswers.map((answer, index) => (
          <button
            key={index}
            className={`size-32 lg:size-56 p-2 border-4 border-black text-black font-bold rounded-lg ${
              selectedAnswer === answer ? 'bg-red-500' : 'bg-blue-500'
            } text-white font-bold`}
            onClick={() => handleAnswerSelect(answer)}
            disabled={selectedAnswer !== null}>
            {answer.toFixed(2)}%
          </button>
        ))}
      </div>
      {/* TODO: Add back button, question counter and timer here */}
    </div>
  );
}
