/* eslint-disable react/prop-types */
import  SelectPlan from './SelectPlan';
import PersonalInfo  from './PersonalInfo';
import  Summary  from './Summary';
import  AddOns  from './AddOns';
import  End  from './End';

export default function Content({increaseSteps,decreaseSteps ,stepsInfo, setStepsInfo, step, allPlans,setStepStage }) {
  
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
      {step === 3 && <AddOns
                      step={step}
                      decreaseSteps={decreaseSteps}
                      stepsInfo={stepsInfo}
                      increaseSteps={increaseSteps}
                      setStepsInfo={setStepsInfo}  
                     />}
      {step === 4 && <Summary 
                      stepsInfo={stepsInfo}
                      decreaseSteps={decreaseSteps}
                      increaseSteps={increaseSteps}
                      setStepsInfo={setStepsInfo}
                      step={step}
                      allPlans={allPlans}
                      setStepStage={setStepStage}
                     />}
      {step === 5 && <End />}
    </div>
  );
}
