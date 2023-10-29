/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import  Plan  from '/src/components/Plan.jsx';

export default function SelectPlan({decreaseSteps,increaseSteps ,stepsInfo, setStepsInfo, step, plans }) {
  const [selectedYearly, setSelectedYearly] = useState(stepsInfo[step-1].info.yearly);
  const [selectedPlan, setSelectedPlan] = useState(stepsInfo[step-1].info.plan);
  const circleRef = useRef(null);
  function transformCircle() {
    const target = circleRef.current;

    if (target.classList.contains("MoveCircle")) {
      target.classList.remove("MoveCircle" , "On");
      setSelectedYearly(false);
    } else {
      target.classList.add("MoveCircle", "On");
      setSelectedYearly(true);
    }
  }

  function SelectPlan(e) {
    plans.map((plan) => {
      if (plan.planName === e.target.id) {
        plan.isSelected = true;
        setSelectedPlan(e.target.id);
      } else {
        plan.isSelected = false;
      }
    })

  }

  function Submit(){
    if(selectedPlan == "") return
    stepsInfo[step-1].info.plan = selectedPlan;
    stepsInfo[step-1].info.yearly = selectedYearly;
    increaseSteps();
  }

  return (
    <>
      <div className="Plans-Container">
        {plans.map((plan, index) => (
          <Plan isYearly={selectedYearly} key={index} plan={plan} onClick={SelectPlan} />
        ))}
      </div>
      <div className="Plan-Radio">
        <div className="Plan-Radio-Container">
            <p className={`Plan-Radio-Text ${!selectedYearly ? 'Selected' : ''}`}>Monthly</p>
          <button className={`Plan-Radio-Button ${selectedYearly ? 'On' : ''}`} onClick={transformCircle}>
            <div ref={circleRef} className="Plan-Radio-Circle"></div>
          </button>
            <p className={`Plan-Radio-Text ${selectedYearly ? 'Selected' : ''}`}>Yearly</p>
        </div>
      </div>
      <div className="Plan-Buttons">
        <button onClick={decreaseSteps} className="Form-Back-Button">Go Back</button>
        <button onClick={Submit} className="Form-Button">Next Step</button>
      </div>
    </>
  );
}
