/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import  Plan  from '/src/components/Plan.jsx';

export default function SelectPlan({decreaseSteps,increaseSteps ,stepsInfo, setStepsInfo, step, plans }) {
  const [selectedYearly, setSelectedYearly] = useState(stepsInfo[step-1].info.yearly);
  const [selectedPlan, setSelectedPlan] = useState(stepsInfo[step-1].info.plan);
  const [Error, setError] = useState(false)
  const circleRef = useRef(null);


  const formDataDiv = document.querySelector(".Form-Content");
  function transformCircle() {
    const target = circleRef.current;

    if (target.classList.contains("MoveCircle")) {
      setSelectedYearly(false);
    } else {
      setSelectedYearly(true);
    }
  }

  function SelectPlan(e) {
    setError(false)
    plans.map((plan) => {
      if (plan.planName === e.target.id) {
        plan.isSelected = true;
        setSelectedPlan(e.target.id);
      } else {
        plan.isSelected = false;
      }
    })

  }

  function GoBack() {
    setTimeout(() => {
      stepsInfo[0].isActive = true
      stepsInfo[1].isActive = false
      decreaseSteps();
      formDataDiv.classList.remove("FadeOut")
    }, 600);
    formDataDiv.classList.add("FadeOut")
  }

  function Submit(){
    if(selectedPlan == "") {
      setError(true)
      return
    }
    setTimeout(() => {
      stepsInfo[step-1].info.plan = selectedPlan;
      stepsInfo[step-1].info.yearly = selectedYearly;
      stepsInfo[step-1].isActive = false
      stepsInfo[step].isActive = true
      increaseSteps();
      formDataDiv.classList.remove("FadeOut")
    }, 600);
    formDataDiv.classList.add("FadeOut")
  }

  return (
    <>
      <div className="Form-Content-Title-Container">
        <h1 className="Form-Content-Title">Select your plan</h1>
        <p className="Form-Content-Subtitle">You have the option of monthly or yearly billing.</p>
      </div>
      <div className="Error-Container">

        <div className="Plans-Container">
          {plans.map((plan, index) => (
            <Plan isYearly={selectedYearly} key={index} plan={plan} onClick={SelectPlan} />
            ))}
        </div>
        {
        Error
        ?  <p className="Plan-Error">You Have to select one of the plans</p>
        : null
        }
      </div>
      <div >
        <div className="Plan-Radio">
          <div className="Plan-Radio-Container">
              <p className={`Plan-Radio-Text ${!selectedYearly ? 'Selected' : ''}`}>Monthly</p>
            <button className={`Plan-Radio-Button ${selectedYearly ? 'On' : ''}`} onClick={transformCircle}>
              <div ref={circleRef} className={`Plan-Radio-Circle ${selectedYearly ? 'MoveCircle On' : ''}`}></div>
            </button>
              <p className={`Plan-Radio-Text ${selectedYearly ? 'Selected' : ''}`}>Yearly</p>
          </div>
        </div>
        <div className="Form-Buttons">
          <button onClick={GoBack} className="Form-Back-Button">Go Back</button>
          <button onClick={Submit} className="Form-Button">Next Step</button>
        </div>
      </div>
    </>
  );
}
