import { ArrowLeftIcon } from '@heroicons/react/outline';
import StepSix from './StepSix';
import { useState } from 'react';
import StepFour from './StepFour';

const StepFive = () => {
  const [showStepSix, setStepSix] = useState(false);
  const [showStepFour, setStepFour] = useState(false);

  const handleClick = () => {
    setStepSix(true);
  };

  if (showStepSix) {
    return <StepSix />;
  }

  const backer = () => {
    setStepFour(true);
  };

  if (showStepFour) {
    return <StepFour />;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center p-4">
        <ArrowLeftIcon className="w-6 h-6 text-blue-500 cursor-pointer" onClick={backer} />
        <div className="relative w-full h-2 bg-gray-200 ml-4">
          <div className="absolute top-0 left-0 h-2 bg-blue-500" style={{ width: '100%' }}></div>
        </div>
      </div>
      <div className="flex-grow overflow-auto">
        <div className="bg-gray-100 flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-4xl">

            {/* Image and Content */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-1 mb-10 mt-18">
              <div className="md:w-1/2 mr-20 mt-10" >
                <img src="/static/result-2.png" alt="Descriptive Alt Text" className="w-full" />
              </div>
              <div className="md:w-1/2 ml-50 mt-10">
                <h2 className="text-3xl font-bold mb-4">You're on the way!</h2>
                <p className="text-2xl mt-10"> ⭐⭐⭐⭐⭐ </p>
                <p className="text-lg font-normal text-gray-600"> "Throught its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to underStand. I now feel confident approaching both technical job interviews and real world problem solving situations." </p>
              <p className="mt-10">---Jacob S.</p>
              </div>
            </div>

            {/* Continue Button */}
            <div className="text-center mt-25">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20" onClick={handleClick}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
