import React from 'react';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-white text-center">
        <div className="flex items-center justify-center mb-4">
          {/* Rotating Spinner */}
          <svg className="animate-spin h-12 w-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        </div>
        <p className="text-2xl font-semibold mb-2">Loading My Portfolio...</p>
        <p className="text-lg">Please wait while we prepare everything for you.</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
