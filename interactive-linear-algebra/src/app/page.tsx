import Link from 'next/link';

export default function Home() {
  const chapters = [
    { id: '1', title: 'Introduction to Linear Algebra', desc: 'Learn what linear algebra is and get familiar with basic concepts like scalars and vectors.' },
    { id: '2', title: 'Vector Basics', desc: 'Understand vector operations including addition, subtraction, and scalar multiplication.' },
    { id: '3', title: 'Vector Spaces', desc: 'Explore the concept of vector spaces and their properties.' },
    { id: '4', title: 'Matrices', desc: 'Learn about matrices and how they represent linear transformations.' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Interactive Linear Algebra</h1>
        <p className="text-2xl mb-8">
          Learn linear algebra step-by-step through interactive lessons and exercises.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/chapters/1"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-xl font-medium"
          >
            Start Learning
          </Link>
          <Link
            href="/about"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-xl text-xl font-medium"
          >
            About This Project
          </Link>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center">Course Content</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {chapters.map((chapter) => (
          <Link key={chapter.id} href={`/chapters/${chapter.id}`}>
            <div className="chapter-card h-full">
              <h2 className="text-2xl font-semibold mb-3">Chapter {chapter.id}: {chapter.title}</h2>
              <p className="text-gray-600 text-lg">{chapter.desc}</p>
              <div className="mt-4 flex justify-end">
                <span className="text-blue-600 font-medium">Start Chapter →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Learn With Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-blue-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
            <p>Engage with concepts through interactive exercises and immediate feedback.</p>
          </div>
          
          <div className="p-6 bg-green-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Step-by-Step Approach</h3>
            <p>Learn at your own pace with clear explanations and gradual progression.</p>
          </div>
          
          <div className="p-6 bg-purple-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Visual Understanding</h3>
            <p>Visualize abstract concepts with clear diagrams and interactive examples.</p>
          </div>
        </div>
      </div>
    </div>
  );
}