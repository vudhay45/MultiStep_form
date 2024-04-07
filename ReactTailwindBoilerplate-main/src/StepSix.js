import React,{useState} from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid'; 
import StepSeven from './StepSeven';


const StepSix = () => {
    const [showStepSeven,setShowStepSeven]=useState(false);
const nextPage=()=>{
    setShowStepSeven(true);
}
if(showStepSeven){
    return<StepSeven />
}
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      {/* Image container */}
      <div className="mb-4">
        <img src="/static/circle.png" alt="Learning Path" className="w-20 max-w-xs mx-auto" />


      </div>
      <p className="font-bold text-3xl text-gray-800 mb-4">
  Finding learning path recommendations for you based on your responses
</p>

      <div className="self-end">
        <ArrowRightIcon className="w-8 h-8 text-gray-600" onClick={nextPage}/>
      </div>
    </div>
  );
};

export default StepSix;
