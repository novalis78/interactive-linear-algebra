'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import MathDisplay from '@/components/MathDisplay';
import Exercise from '@/components/Exercise';

// This would normally come from your database or content API
const chaptersContent = {
  '1': {
    title: 'Introduction to Linear Algebra',
    cards: [
      {
        id: '1-1',
        title: 'What is Linear Algebra?',
        content: `
          Welcome to your linear algebra journey! Before we dive into complex concepts, let's understand what linear algebra is and why it matters.
          
          Linear algebra is a branch of mathematics that focuses on linear equations and their representations using vectors and matrices. It provides a powerful framework for solving problems in many fields including physics, engineering, computer science, and data analysis.
        `,
        hasExercise: false
      },
      {
        id: '1-2',
        title: 'Why Study Linear Algebra?',
        content: `
          Linear algebra is incredibly useful and appears in many areas:
          
          • Machine learning and AI
          • Computer graphics and game design
          • Physics simulations
          • Data analysis and statistics
          • Engineering applications
          
          The concepts you'll learn here form the foundation of many advanced technologies!
        `,
        hasExercise: false
      },
      {
        id: '1-3',
        title: 'Linear Algebra Building Blocks',
        content: `
          Throughout this course, we'll explore these key concepts:

          • Vectors: Quantities with both magnitude and direction
          • Matrices: Rectangular arrays of numbers
          • Linear transformations: Functions that preserve vector addition and scalar multiplication
          • Systems of linear equations: Multiple equations that we solve simultaneously
          
          Let's start with the basic building blocks in the next card!
        `,
        hasExercise: true,
        exercise: {
          id: '1-3-1',
          question: 'Which of these is NOT typically studied in linear algebra? Type the letter (A, B, C, or D).',
          expectedAnswer: 'D',
          hint: 'Linear algebra focuses on linear structures and transformations.'
        },
        choices: [
          'A. Vectors',
          'B. Matrices',
          'C. Linear transformations',
          'D. Differential equations'
        ]
      },
      {
        id: '1-4',
        title: 'Numbers and Scalars',
        content: `
          Let's start with something familiar: numbers. In linear algebra, we often call numbers "scalars."
          
          Scalars can be real numbers (like 3, -5, or 0.5) or complex numbers. For now, we'll focus on real numbers.
          
          Scalars are used to scale (multiply) vectors and matrices, which we'll learn about soon.
        `,
        mathFormula: 'c \\cdot \\mathbf{v}',
        additionalContent: `
          In the expression above, c is a scalar that multiplies (or "scales") the vector v. If c = 2, for example, the result is a vector twice as long as v.
        `,
        hasExercise: true,
        exercise: {
          id: '1-4-1',
          question: 'If you multiply a vector by the scalar 3, what happens to the vector\'s length? It gets...',
          expectedAnswer: 'tripled',
          hint: 'Think about what happens when you multiply a number by 3.'
        }
      },
      {
        id: '1-5',
        title: 'Your First Vector',
        content: `
          Now let's introduce a fundamental concept in linear algebra: the vector.
          
          In its simplest form, a vector is a list of numbers. For example, a 2-dimensional vector might look like this:
        `,
        mathFormula: '\\mathbf{v} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}',
        additionalContent: `
          This vector has two components: 2 and 3. We can think of this as a point at coordinates (2, 3) or as an arrow from the origin (0, 0) to the point (2, 3).
        `,
        hasExercise: true,
        exercise: {
          id: '1-5-1',
          question: 'How many components does a 4-dimensional vector have?',
          expectedAnswer: '4',
          hint: 'The dimension of a vector tells you how many numbers it contains.'
        }
      },
      {
        id: '1-6',
        title: 'Visualizing Vectors',
        content: `
          Vectors can be visualized as arrows in space. The direction of the arrow represents the vector's direction, and the length of the arrow represents the vector's magnitude (or length).
          
          For a 2D vector (x, y):
          • The arrow starts at the origin (0, 0)
          • It extends x units horizontally and y units vertically
          • The resulting arrow represents the vector
        `,
        mathFormula: '\\|\\mathbf{v}\\| = \\sqrt{x^2 + y^2}',
        additionalContent: `
          The length (magnitude) of a vector can be calculated using the Pythagorean theorem. For the vector (2, 3), the length would be:
          
          √(2² + 3²) = √(4 + 9) = √13 ≈ 3.61
        `,
        hasExercise: true,
        exercise: {
          id: '1-6-1',
          question: 'What is the length (magnitude) of the vector (3, 4)?',
          expectedAnswer: '5',
          hint: 'Use the Pythagorean theorem: √(3² + 4²)'
        }
      },
      {
        id: '1-7',
        title: 'The Zero Vector',
        content: `
          A special vector in linear algebra is the zero vector, denoted as 0 or 0. It's a vector where all components are zero.
          
          For example, in 2D space, the zero vector is (0, 0). In 3D space, it's (0, 0, 0).
          
          The zero vector has some special properties:
          • Its length (magnitude) is 0
          • It has no specific direction
          • Adding the zero vector to any other vector leaves that vector unchanged
        `,
        hasExercise: true,
        exercise: {
          id: '1-7-1',
          question: 'If you add the zero vector to vector v, what is the result?',
          expectedAnswer: 'v',
          hint: 'Think about what happens when you add zero to a number.'
        }
      }
    ]
  },
  '2': {
    title: 'Vector Basics',
    cards: [
      {
        id: '2-1',
        title: 'Vector Operations',
        content: `
          Now that we understand what vectors are, let's learn how to work with them.
          
          There are two fundamental operations with vectors:
          
          1. Vector addition
          2. Scalar multiplication
          
          Let's explore each one!
        `,
        hasExercise: false
      },
      {
        id: '2-2',
        title: 'Adding Vectors',
        content: `
          One of the most basic operations we can perform with vectors is addition.
          
          To add two vectors, we simply add their corresponding components. For example:
        `,
        mathFormula: '\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 1+3 \\\\ 2+4 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}',
        additionalContent: `
          Geometrically, vector addition can be visualized by placing the tail of the second vector at the head of the first vector.
        `,
        hasExercise: true,
        exercise: {
          id: '2-2-1',
          question: 'What is the result of adding the vectors (2, 5) and (3, -1)?',
          expectedAnswer: '(5, 4)',
          hint: 'Add the corresponding components: 2+3 for the first component, and 5+(-1) for the second.'
        }
      },
      {
        id: '2-3',
        title: 'Subtracting Vectors',
        content: `
          Vector subtraction works similarly to addition, but we subtract corresponding components instead.
          
          To subtract vector b from vector a, we compute a - b by subtracting each component of b from the corresponding component of a.
        `,
        mathFormula: '\\begin{pmatrix} 5 \\\\ 7 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 5-2 \\\\ 7-3 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}',
        additionalContent: `
          Geometrically, the vector a - b represents the vector that starts at the tip of b and ends at the tip of a (when both a and b start at the origin).
        `,
        hasExercise: true,
        exercise: {
          id: '2-3-1',
          question: 'What is the result of (6, 8) - (4, 3)?',
          expectedAnswer: '(2, 5)',
          hint: 'Subtract the corresponding components: 6-4 for the first component, and 8-3 for the second.'
        }
      },
      {
        id: '2-4',
        title: 'Scalar Multiplication',
        content: `
          Scalar multiplication scales a vector by a constant factor. When we multiply a vector by a scalar, we multiply each component of the vector by that scalar.
          
          For example, multiplying the vector (2, 3) by the scalar 4:
        `,
        mathFormula: '4 \\cdot \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 4 \\cdot 2 \\\\ 4 \\cdot 3 \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 12 \\end{pmatrix}',
        additionalContent: `
          Geometrically, scalar multiplication changes the length of the vector without changing its direction (unless the scalar is negative, which reverses the direction).
        `,
        hasExercise: true,
        exercise: {
          id: '2-4-1',
          question: 'What is the result of multiplying the vector (3, -2) by the scalar -5?',
          expectedAnswer: '(-15, 10)',
          hint: 'Multiply each component by -5: 3×(-5) and (-2)×(-5).'
        }
      },
      {
        id: '2-5',
        title: 'Vector Properties',
        content: `
          Vector operations follow several important properties:
          
          1. Commutative property of addition: a + b = b + a
          2. Associative property of addition: (a + b) + c = a + (b + c)
          3. Existence of additive identity: a + 0 = a
          4. Existence of additive inverse: a + (-a) = 0
          5. Distributive property: c(a + b) = ca + cb
          
          These properties allow us to manipulate vectors algebraically, similar to how we work with regular numbers.
        `,
        hasExercise: true,
        exercise: {
          id: '2-5-1',
          question: 'Which property states that the order of vector addition doesn\'t matter? Enter the number.',
          expectedAnswer: '1',
          hint: 'Look for the property that mentions order of addition.'
        }
      },
      {
        id: '2-6',
        title: 'Linear Combinations',
        content: `
          A linear combination of vectors is an expression where we multiply each vector by a scalar and then add the results.
          
          For example, if we have vectors v and w, a linear combination would be:
        `,
        mathFormula: 'a\\mathbf{v} + b\\mathbf{w}',
        additionalContent: `
          where a and b are scalars.
          
          Linear combinations are fundamental in linear algebra. Many important concepts (like span, linear independence, and basis) are defined in terms of linear combinations.
        `,
        hasExercise: true,
        exercise: {
          id: '2-6-1',
          question: 'Express the vector (11, 16) as a linear combination of (2, 3) and (1, 2). Write your answer as "av + bw" where a and b are scalars.',
          expectedAnswer: '5v + 1w',
          hint: 'You need to find values a and b such that a(2, 3) + b(1, 2) = (11, 16). Set up and solve the system of equations.'
        }
      }
    ]
  }
};

export default function ChapterPage() {
  const params = useParams();
  const router = useRouter();
  const chapterId = params?.id as string;
  
  // Get chapter content or default to chapter 1
  const chapter = chaptersContent[chapterId as keyof typeof chaptersContent] || chaptersContent['1'];
  
  // State for current card
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [direction, setDirection] = useState(''); // 'next' or 'prev' for transition direction
  const [animating, setAnimating] = useState(false);
  
  // Force Exercise component to reset when changing cards by using a key
  const [exerciseKey, setExerciseKey] = useState(0);
  
  // Check if we should show chapter navigation
  const isFirstCard = currentCardIndex === 0;
  const isLastCard = currentCardIndex === chapter.cards.length - 1;
  
  // Handle navigation
  const goToCard = (index: number) => {
    if (index < 0 || index >= chapter.cards.length || animating) return;
    
    setDirection(index > currentCardIndex ? 'next' : 'prev');
    setAnimating(true);
    
    // Wait for animation to start before changing card
    setTimeout(() => {
      setCurrentCardIndex(index);
      // Force Exercise component to reset by changing its key
      setExerciseKey(prev => prev + 1);
      
      // Wait for animation to complete
      setTimeout(() => {
        setAnimating(false);
      }, 300); // Animation duration
    }, 50);
  };
  
  const goToNextCard = () => goToCard(currentCardIndex + 1);
  const goToPrevCard = () => goToCard(currentCardIndex - 1);
  
  // Handler for when exercise is correctly answered
  const handleCorrectAnswer = () => {
    if (!isLastCard) {
      goToNextCard();
    }
  };
  
  // Go to next chapter
  const goToNextChapter = () => {
    const nextChapterId = String(Number(chapterId) + 1);
    if (chaptersContent[nextChapterId as keyof typeof chaptersContent]) {
      router.push(`/chapters/${nextChapterId}`);
    }
  };
  
  // Go to previous chapter
  const goToPrevChapter = () => {
    const prevChapterId = String(Number(chapterId) - 1);
    if (prevChapterId === '0') {
      router.push('/');
    } else if (chaptersContent[prevChapterId as keyof typeof chaptersContent]) {
      router.push(`/chapters/${prevChapterId}`);
    }
  };
  
  // Track progress
  useEffect(() => {
    try {
      const progress = JSON.parse(localStorage.getItem('chapterProgress') || '{}');
      if (!progress[chapterId]) {
        progress[chapterId] = { lastCardSeen: 0 };
      }
      
      // Update if we're seeing a new card
      if (currentCardIndex > progress[chapterId].lastCardSeen) {
        progress[chapterId].lastCardSeen = currentCardIndex;
        localStorage.setItem('chapterProgress', JSON.stringify(progress));
      }
    } catch (error) {
      console.error('Error tracking progress:', error);
    }
  }, [currentCardIndex, chapterId]);
  
  // Get current card
  const currentCard = chapter.cards[currentCardIndex];
  
  // Calculate progress percentage
  const progressPercentage = ((currentCardIndex + 1) / chapter.cards.length) * 100;
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle navigation if not in an input field and not animating
      if (e.target instanceof HTMLInputElement || animating) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (!isLastCard) {
          goToNextCard();
        } else {
          goToNextChapter();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (!isFirstCard) {
          goToPrevCard();
        } else if (Number(chapterId) > 1) {
          goToPrevChapter();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCardIndex, isFirstCard, isLastCard, animating, chapterId]);
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with chapter title and home link */}
      <header className="p-4 border-b relative z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 inline-flex items-center"
          >
            ← Home
          </Link>
          <h1 className="text-xl font-bold text-center">Chapter {chapterId}: {chapter.title}</h1>
          <div className="w-10"></div> {/* Spacer for flex alignment */}
        </div>
      </header>
      
      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200">
        <div 
          className="h-2 bg-blue-500 transition-all duration-300 ease-in-out" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      {/* Main content area with cards */}
      <main className="flex-grow flex items-center justify-center px-4 relative overflow-hidden">
        {/* Card container with animation */}
        <div 
          className={`card-container max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg 
                     transition-all duration-300 ease-in-out
                     ${animating ? direction === 'next' ? 'slide-out-left' : 'slide-out-right' : ''}
                     ${animating ? 'opacity-0' : 'opacity-100'}`}
        >
          <h2 className="text-3xl font-semibold mb-6">{currentCard.title}</h2>
          
          <div className="prose max-w-none">
            <p className="mb-4 text-xl leading-relaxed">{currentCard.content}</p>
            
            {currentCard.mathFormula && (
              <div className="my-6 p-4 bg-blue-50 rounded-lg flex justify-center">
                <MathDisplay formula={currentCard.mathFormula} />
              </div>
            )}
            
            {currentCard.additionalContent && (
              <p className="mb-4 text-xl leading-relaxed">{currentCard.additionalContent}</p>
            )}
            
            {currentCard.choices && (
              <div className="my-6 p-4 bg-gray-100 rounded-lg">
                <h3 className="font-semibold mb-2">Options:</h3>
                <ul className="list-none">
                  {currentCard.choices.map((choice, idx) => (
                    <li key={idx} className="mb-2 text-lg">{choice}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {currentCard.hasExercise && currentCard.exercise && (
            <div className="my-8">
              <Exercise
                key={`exercise-${currentCard.exercise.id}-${exerciseKey}`}
                id={currentCard.exercise.id}
                question={currentCard.exercise.question}
                mathFormula={currentCard.exercise.mathFormula}
                expectedAnswer={currentCard.exercise.expectedAnswer}
                hint={currentCard.exercise.hint}
                onCorrectAnswer={handleCorrectAnswer}
              />
            </div>
          )}
        </div>
        
        {/* Navigation buttons - Made larger and positioned closer to content */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
          {!isFirstCard ? (
            <button 
              onClick={goToPrevCard}
              disabled={animating}
              className="navigation-button prev"
              aria-label="Previous card"
            >
              ←
            </button>
          ) : Number(chapterId) > 1 ? (
            <button 
              onClick={goToPrevChapter}
              disabled={animating}
              className="navigation-button prev"
              aria-label="Previous chapter"
            >
              ←
            </button>
          ) : null}
        </div>
        
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          {!isLastCard ? (
            <button 
              onClick={goToNextCard}
              disabled={animating}
              className="navigation-button next"
              aria-label="Next card"
            >
              →
            </button>
          ) : (
            <button 
              onClick={goToNextChapter}
              disabled={animating}
              className="navigation-button next"
              aria-label="Next chapter"
            >
              →
            </button>
          )}
        </div>
      </main>
      
      {/* Footer with navigation dots */}
      <footer className="p-4 border-t">
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="flex space-x-2">
            {chapter.cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                disabled={animating}
                className={`w-3 h-3 rounded-full ${currentCardIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}