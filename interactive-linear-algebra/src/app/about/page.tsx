import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link 
        href="/"
        className="text-blue-600 hover:text-blue-800 inline-flex items-center mb-6"
      >
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">About This Project</h1>
      
      <div className="prose max-w-none text-lg">
        <p className="mb-4">
          Interactive Linear Algebra is an educational platform designed to make learning linear algebra 
          accessible, engaging, and fun through interactive examples, visualizations, and step-by-step exercises.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to democratize education by making high-quality learning materials freely available to everyone. 
          We believe that interactive learning leads to better understanding and retention of complex mathematical concepts.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Source Material</h2>
        <p className="mb-4">
          This platform is based on an open-source linear algebra textbook, transformed into an 
          interactive format to enhance the learning experience. We've maintained the core content while 
          adding interactive elements, visualizations, and gamification features.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Interactive exercises with immediate feedback</li>
          <li className="mb-2">Mathematical visualizations of key concepts</li>
          <li className="mb-2">Progress tracking and achievement badges</li>
          <li className="mb-2">Mobile-friendly design for learning on the go</li>
          <li className="mb-2">Comprehensive coverage of linear algebra topics</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Get Involved</h2>
        <p className="mb-4">
          This is an open-source project and we welcome contributions! Whether you're interested in 
          improving the content, adding new features, or fixing bugs, your help is appreciated.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">License</h2>
        <p className="mb-4">
          This project is available under an open-source license, allowing for free use, modification, and distribution.
        </p>
      </div>
    </div>
  );
}