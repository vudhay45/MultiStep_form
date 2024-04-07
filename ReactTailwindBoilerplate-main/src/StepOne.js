import React, { useState } from 'react';
import StepTwo from './StepTwo'; // import StepTwo component

const StepOne = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showStepTwo, setShowStepTwo] = useState(false); // state to control StepTwo visibility

  const options = [
    { id: 1, label: 'Student or soon to be enrolled', image: '/static/Student.jpeg' },
    { id: 2, label: 'Professional pursuing a career', image: '/static/Professional.png' },
    { id: 3, label: 'Parent of a school-age child', image: '/static/Parentsofaschool.jpg' },
    { id: 4, label: 'Lifelong learner', image: '/static/Lifelonglearning.png' },
    { id: 5, label: 'Teacher', image: '/static/Teacher.png' },
    { id: 6, label: 'Other', image: '/static/others.jpg' },
  ];

  const handleNext = () => {
    if (selectedOption) {
      setShowStepTwo(true); // Show StepTwo when continue button is clicked
    }
  };

  if (showStepTwo) {
    return <StepTwo selectedOption={selectedOption} />;
  }

  return (
    <div>
      <div className="relative w-full h-2 bg-gray-200 top-4 left -20 right-100">
        <div className="absolute top-0 left-0 h-2 bg-blue-500" style={{ width: '20%' }}></div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-lg">
          <h1 className="text-center text-3xl font-bold my-4">
            Which describes you the best?
          </h1>
          <p className="text-center text-sm mb-4">
            This will help us personalize your experience.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {options.map((option) => (
              <div
                key={option.id}
                className={`p-4 border-2 cursor-pointer ${
                  selectedOption === option.id ? 'border-blue-500' : 'border-black-2'
                }`}
                onClick={() => setSelectedOption(option.id)}
              >
                <div className="flex items-center">
                  <img src={option.image} alt={option.label} className="w-8 h-8 mr-2" />
                  <p className="text-center">{option.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              className={`bg-blue-500 text-white px-4 py-2 rounded ${
                selectedOption ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!selectedOption}
              onClick={handleNext}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
