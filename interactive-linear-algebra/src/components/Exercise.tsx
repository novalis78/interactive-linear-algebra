'use client';

import { useState, FC, KeyboardEvent, useEffect, useRef } from 'react';
import MathDisplay from './MathDisplay';

interface ExerciseProps {
  id: string;
  question: string;
  mathFormula?: string;
  expectedAnswer: string;
  hint?: string;
  onCorrectAnswer?: () => void;
}

const Exercise: FC<ExerciseProps> = ({
  id,
  question,
  mathFormula,
  expectedAnswer,
  hint,
  onCorrectAnswer,
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [celebration, setCelebration] = useState(false);
  
  // Ref to track if answer was just marked correct
  const wasJustCorrect = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const checkAnswer = () => {
    if (isCorrect === true) return; // Already correct
    
    const normalizedUserAnswer = userAnswer.trim().toLowerCase();
    const normalizedExpectedAnswer = expectedAnswer.trim().toLowerCase();
    
    const correct = normalizedUserAnswer === normalizedExpectedAnswer;
    setIsCorrect(correct);
    setAttempts(attempts + 1);
    
    // If correct, trigger celebration
    if (correct) {
      setCelebration(true);
      setTimeout(() => setCelebration(false), 3000);
      
      // Save progress to localStorage
      try {
        const progress = JSON.parse(localStorage.getItem('progress') || '{}');
        progress[id] = true;
        localStorage.setItem('progress', JSON.stringify(progress));
      } catch (error) {
        console.error('Error saving progress:', error);
      }
      
      // Mark as just correct to handle Enter key for next card
      wasJustCorrect.current = true;
      
      // Notify parent component if provided
      if (onCorrectAnswer) {
        // Wait a moment before advancing to next card
        setTimeout(() => onCorrectAnswer(), 500);
      }
    }
  };
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (isCorrect === true) {
        // If already correct and Enter is pressed again, trigger onCorrectAnswer
        if (onCorrectAnswer) {
          onCorrectAnswer();
        }
      } else if (userAnswer.trim() !== '') {
        // If not correct yet, check the answer
        checkAnswer();
      }
    }
  };
  
  // Focus the input on initial render
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="exercise-box relative">
      {celebration && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-6xl">
            🎉
          </div>
        </div>
      )}
    
      <div className="mb-4">
        <h3 className="text-2xl font-semibold mb-3">Practice Problem</h3>
        <p className="mb-3 text-xl">{question}</p>
        {mathFormula && (
          <div className="my-6 p-4 bg-blue-50 rounded-lg flex justify-center">
            <MathDisplay formula={mathFormula} />
          </div>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor={`answer-${id}`} className="block text-lg font-medium mb-2">
          Your Answer:
        </label>
        <input
          ref={inputRef}
          id={`answer-${id}`}
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type your answer here..."
          className="solution-input text-2xl"
          disabled={isCorrect === true}
          onKeyDown={handleKeyDown}
        />
        
        <div className="flex flex-wrap justify-between mt-4 gap-3">
          <button
            onClick={checkAnswer}
            disabled={isCorrect === true || userAnswer.trim() === ''}
            className={`px-6 py-3 rounded-lg font-medium text-lg ${
              isCorrect === true
                ? 'bg-green-500 text-white'
                : userAnswer.trim() === ''
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isCorrect === true ? 'Correct! 🎉' : 'Check Answer'}
          </button>
          
          {hint && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-6 py-3 bg-yellow-100 hover:bg-yellow-200 rounded-lg text-yellow-800 font-medium text-lg"
            >
              {showHint ? 'Hide Hint' : 'Need a Hint?'}
            </button>
          )}
        </div>
        
        {isCorrect === false && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600">
              {attempts === 1 
                ? "That's not quite right. Try again!" 
                : attempts === 2
                ? "Still not correct. Maybe try a different approach?"
                : "Keep trying! Consider using the hint if you're stuck."}
            </p>
          </div>
        )}
        
        {showHint && hint && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold mb-1">Hint:</h4>
            <p className="text-yellow-800">{hint}</p>
          </div>
        )}
        
        {isCorrect === true && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-1">Great job!</h4>
            <p className="text-green-700">
              You've mastered this concept. Press <span className="font-bold">Enter</span> or the right arrow to continue.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise;