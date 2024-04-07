import React, { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import StepThree from './StepThree';
import StepFive from './StepFive';

const StepFour = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showStepThree, setShowStepThree] = useState(false);
  const [showStepFive, setShowStepFive] = useState(false);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleClick = () => {
    setShowStepFive(true);
  };

  if (showStepFive) {
    return <StepFive />;
  }

  const onBacker = () => {
    setShowStepThree(true);
  };

  if (showStepThree) {
    return <StepThree />;
  }

  // Replace these with the actual paths to your images
  const imagePaths = {
    Arithmetic: '/static/1stop.png',
    'Basic Algebra': '/static/2ndop.png',
    'Intermediate Algebra': '/static/3rdop.png',
    Calculus: '/static/4thop.png',
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex items-center p-4">
        <ArrowLeftIcon className="w-6 h-6 text-blue-500 cursor-pointer" onClick={onBacker} />
        <div className="relative w-full h-2 bg-gray-200 ml-4">
          <div className="absolute top-0 left-0 h-2 bg-blue-500" style={{ width: '80%' }}></div>
        </div>
      </div>
      <div className="flex-grow flex  items-center justify-center bg-gray-100 p-4">
        <div className="w-full rounded-lg p-8">
          <h2 className="text-center text-3xl font-bold mb-6">What is your math comfort level?</h2>
          <p className="text-center mb-8">Choose the highest level you feel confident in — you can always adjust later.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 mt-20">
            {['Arithmetic', 'Basic Algebra', 'Intermediate Algebra', 'Calculus'].map((level, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-between p-4 border-2 h-full ${
                  selectedOption === level ? 'border-blue-500' : 'border-gray-300'
                } cursor-pointer`}
                onClick={() => handleSelectOption(level)}
              >
              <div className="flex-grow flex items-center justify-center">
                <img src={imagePaths[level]} alt={level} className="mb-2" />
                </div>
                <div className="text-center">
                <div className="font-medium">{level}</div>
                <div className="text-sm text-gray-700">{['Introductory', 'Foundational', 'Intermediate', 'Advanced'][index]}</div>
              </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                !selectedOption && 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!selectedOption}
              onClick={handleClick}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
