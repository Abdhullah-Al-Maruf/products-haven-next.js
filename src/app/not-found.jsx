import Link from 'next/link';
import Head from 'next/head';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <Head>
        <title>Page Not Found | Products Haven</title>
      </Head>

      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        
        {/* Floating Illustration Container */}
        <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 animate-float">
          {/* Abstract Shopping Bag / Ghost SVG */}
          <svg 
            viewBox="0 0 200 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-2xl"
          >
            {/* Bag Body */}
            <path 
              d="M40 60 C40 60 30 180 100 180 C170 180 160 60 160 60 L40 60 Z" 
              fill="white" 
              stroke="#4F46E5" 
              strokeWidth="4"
            />
            {/* Handles */}
            <path 
              d="M70 60 V40 C70 25 82 15 100 15 C118 15 130 25 130 40 V60" 
              stroke="#4F46E5" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
            {/* Face - Confused Eyes */}
            <circle cx="80" cy="100" r="5" fill="#4F46E5" />
            <circle cx="120" cy="100" r="5" fill="#4F46E5" />
            {/* Mouth */}
            <path d="M90 120 Q100 115 110 120" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" />
            {/* Question Mark */}
            <path 
              d="M140 80 Q150 70 140 60 Q130 50 140 40" 
              stroke="#F59E0B" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="animate-pulse-slow"
            />
            <circle cx="140" cy="90" r="3" fill="#F59E0B" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Oops! Product not found.
          </h2>
          <p className="text-gray-500 text-lg max-w-xs mx-auto">
            The item you are looking for might have been removed, renamed, or doesn't exist in our haven.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link 
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2 -ml-1 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <Link 
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-all duration-300 border border-indigo-100 hover:border-indigo-200"
          >
            Browse Products
          </Link>
        </div>
      </div>

      {/* Custom Styles for Animations (No Library Needed) */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}