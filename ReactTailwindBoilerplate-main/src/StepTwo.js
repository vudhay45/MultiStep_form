import React, { useState } from 'react';
import StepThree from './StepThree';
import StepOne from './StepOne';
import { ArrowLeftIcon } from '@heroicons/react/outline';

const StepTwo = ({ onBack }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showStepThree, setShowStepThree] = useState(false);
  const [showStepOne,SetShowStepOne]=useState(false);

  const options = [
    { id: 1, label: 'Learning specific skills to advance my career', image: '/static/graph.png' },
    { id: 2, label: 'Exploring new topics I\m interested in', image: '/static/world.png' },
    { id: 3, label: 'Refreshing my math foundations', image: '/static/maths.png' },
    { id: 4, label: 'Exercising my brain to stay sharp', image: '/static/target.png' },
    { id: 5, label: 'something else', image: '/static/eyes.png' },
  ];

  const handleNext = () => {
    if(selectedOption){
      setShowStepThree(true);
    }
  };

  if (showStepThree) {
    return <StepThree selectedOption={selectedOption}/>;
  }
  const onBacker=()=>{
   
        SetShowStepOne(true);
  }
  if(showStepOne){
    return <StepOne  />
  }
  return (
    <div cl>
      <div className="flex items-center">
        <ArrowLeftIcon className="w-6 h-6 text-blue-500 cursor-pointer" onClick={onBacker} />
        <div className="relative w-full h-2 bg-gray-200 ml-4">
          <div className="absolute top-0 left-0 h-2 bg-blue-500" style={{ width: '40%' }}></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between min-h-screen">
        <div className="w-full max-w-lg">
        <h1 className="text-center text-3xl font-bold my-4">
            Which are you most interested in?
          </h1>
          <p className="text-center text-sm mb-4">
            Choose just one. This will help us get you started (but won't limit your experience).
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
          </div>
          <div className="flex justify-center mb-10">
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
  );
};

export default StepTwo;
