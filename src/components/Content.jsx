/* eslint-disable react/prop-types */
import  SelectPlan from './SelectPlan';
import PersonalInfo  from './PersonalInfo';
import { AddOns, Summary } from '../App';

export default function Content({increaseSteps,decreaseSteps ,stepsInfo, setStepsInfo, step, allPlans }) {
  
  return (
    <div className='Form-Content-Inputs'>
      {step === 1 && <PersonalInfo 
                      stepsInfo={stepsInfo} 
                      increaseSteps={increaseSteps} 
                      setStepsInfo={setStepsInfo} 
                      stepNumb={step}
                     />}
      {step === 2 && <SelectPlan 
                      step={step} 
                      decreaseSteps={decreaseSteps} 
                      stepsInfo={stepsInfo} 
                      increaseSteps={increaseSteps}
                      setStepsInfo={setStepsInfo} 
                      plans={allPlans} 
                     />}
      {step === 3 && <AddOns />}
      {step === 4 && <Summary />}
    </div>
  );
}