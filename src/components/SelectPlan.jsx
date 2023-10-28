/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import { Plan } from '/src/components/Plan.jsx';

export function SelectPlan({decreaseSteps,increaseSteps ,stepsInfo, setStepsInfo, step, plans }) {
  const [selectedYearly, setSelectedYearly] = useState(false);
  const circleRef = useRef(null);

  function transformCircle() {
    const target = circleRef.current;

    if (target.classList.contains("MoveCircle")) {
      target.classList.remove("MoveCircle");
      setSelectedYearly(false);
    } else {
      target.classList.add("MoveCircle");
      setSelectedYearly(true);
    }
  }

  return (
    <>
      <div className="Plans-Container">
        {plans.map((plan, index) => (
          <Plan key={index} plan={plan} />
        ))}
      </div>
      <div className="Plan-Radio">
        <div className="Plan-Radio-Container">
          <button className="Plan-Radio-Button" onClick={transformCircle}>
            <div ref={circleRef} className="Plan-Radio-Circle"></div>
          </button>
        </div>
      </div>
      <div className="Plan-Buttons">
        <button onClick={decreaseSteps} className="Form-Back-Button">Go Back</button>
        <button onClick={increaseSteps} className="Form-Button">Next Step</button>
      </div>
    </>
  );
}
