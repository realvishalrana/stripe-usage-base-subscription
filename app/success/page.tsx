'use client'

import React from 'react';
import SuccessIcon from "@/icons/success"

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <div className="flex items-center justify-center bg-green-100 rounded-full h-32 w-32 mx-auto animate-bounce">
          <SuccessIcon />
        </div>
        <h1 className="text-green-600 font-bold text-3xl mt-5">Success!</h1>
        <p className="text-gray-700 text-lg mt-3">Your purchase request was received.<br />We will be in touch shortly!</p>
        <button 
          className="btn btn-accent mt-6"
          onClick={() => window.location.href = '/'}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
