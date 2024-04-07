import React,{useState} from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid'; 
import StepSix from './StepSix';

const StepSeven = () => {
    const[showStepSix,setShowStepSix]=useState(false)
    const onBack=()=>{
        setShowStepSix(true);
    }
    if(showStepSix){
        return <StepSix />
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Learning paths based on your answers</h2>
        <p className="text-sm text-gray-600">Choose one to get started. You can switch anytime.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Option 1 */}
        <div className="border border-gray-300 p-4 rounded-lg relative w-full md:w-1/2">
          <button className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-xs rounded-full px-3 py-1">
            MOST POPULAR
          </button>
          <div className="flex items-center">
            <div className="flex-grow">
              <h3 className="font-semibold mb-2">Foundational Math</h3>
              <p className="text-sm">Build your foundational skills in algebra, geometry, and probability.</p>
            </div>
            <img src="/static/price.png" alt="Foundational Math" className="w-20 max-w-xs" />
          </div>
        </div>
        {/* Option 2 */}
        <div className="border border-gray-280 p-4 rounded-lg w-full md:w-1/2">
          <div className="flex items-center">
            <div className="flex-grow">
              <h3 className="font-semibold mb-2">Mathematical Thinking</h3>
              <p className="text-sm">Build your foundational skills in algebra, geometry, and probability.</p>
            </div>
            <img src="/static/price.png" alt="Mathematical Thinking" className="w-20 max-w-xs" />
          </div>
        </div>
      </div>
      <ArrowLeftIcon className="w-8 h-8 text-gray-600 mt-8" onClick={onBack}/>
    </div>
  );
};

export default StepSeven;
