import { ArrowLeftIcon } from '@heroicons/react/outline';
import StepTwo from './StepTwo';
import { useState } from 'react';
import StepFour from './StepFour';

const StepThree = () => {
  const [showStepTwo, setStepTwo] = useState(false);
  const [showStepFour, setStepFour] = useState(false);

  const handleClick = () => {
    setStepFour(true);
  };

  if (showStepFour) {
    return <StepFour />;
  }

  const backer = () => {
    setStepTwo(true);
  };

  if (showStepTwo) {
    return <StepTwo />;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center p-4">
        <ArrowLeftIcon className="w-6 h-6 text-blue-500 cursor-pointer" onClick={backer} />
        <div className="relative w-full h-2 bg-gray-200 ml-4">
          <div className="absolute top-0 left-0 h-2 bg-blue-500" style={{ width: '60%' }}></div>
        </div>
      </div>
      <div className="flex-grow overflow-auto">
        <div className="bg-gray-100 flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-4xl">

            {/* Image and Content */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-1 mb-10">
              <div className="md:w-1/2 mr-20 mt-4" >
                <img src="/static/weightimage.png" alt="Descriptive Alt Text" className="w-full" />
              </div>
              <div className="md:w-1/2 ml-20 mt-4">
                <h2 className="text-2xl font-bold mb-4">You're in the right place</h2>
                <p>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
              </div>
            </div>

            {/* Continue Button */}
            <div className="text-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={handleClick}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
