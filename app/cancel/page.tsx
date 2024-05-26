'use client'

import React from 'react';
import CancelIcon from "@/icons/cancel"

const CancelPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <div className="flex items-center justify-center bg-red-100 rounded-full h-32 w-32 mx-auto animate-pulse">
         <CancelIcon/>
        </div>
        <h1 className="text-red-600 font-bold text-3xl mt-5">Cancelled</h1>
        <p className="text-gray-700 text-lg mt-3">Your action has been cancelled.<br />If you have any questions, please contact support.</p>
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

export default CancelPage;
