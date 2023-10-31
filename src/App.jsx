/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';

import './App.css'
import Content from './components/Content';
import Step from './components/Step';

import PlansInfo from './Jsons/PlansInfo.json';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';

function App() {
  const [stepStage, setStepStage] = useState(1);
  const [stepsInfo, setStepsInfo] = useState([
    {
      title: 'YOUR INFO',
      number: 1,
      isActive: stepStage === 1,
      info: {
        name: {
          value: '',
          valid: false
        },
        email: {
          value: '',
          valid: false
        },
        phone: {
          value: '',
          valid: false
        }
      }
    },
    {
      title: 'SELECT PLAN',
      number: 2,
      isActive: stepStage === 2,
      info: {
        plan: '',
        yearly: false
      },
    },
    {
      title: 'ADD-ONS',
      number: 3,
      isActive: stepStage === 3
    },
    {
      title: 'SUMMARY',
      number: 4,
      isActive: stepStage === 4
    }
  ]);

  const formContentDiv = useRef(null);

  useEffect(() => {
    const formContent = formContentDiv.current;
    // Use formContent here
  }, []);

  const steps = stepsInfo.map((step, index) => (
    <Step key={index} title={step.title} isActive={step.isActive} number={index + 1} />
  ));

  const increaseSteps = () => {
    setStepStage(prevStage => (prevStage < 4 ? prevStage + 1 : prevStage));
  };

  const decreaseSteps = () => {
    setStepStage(prevStage => (prevStage > 1 ? prevStage - 1 : prevStage));
  };

  return (
    <div className='Form-container'>
      <section className='Form-Steps'>
        {steps}
      </section>

      <section className='Form-Content' ref={formContentDiv}>
        <Content
          decreaseSteps={decreaseSteps}
          increaseSteps={increaseSteps}
          stepsInfo={stepsInfo}
          setStepsInfo={setStepsInfo}
          step={stepStage}
          allPlans={PlansInfo}
          setStepStage={setStepStage}
          steps={steps}
          formContentDiv={formContentDiv}
        />
      </section>
    </div>
  );
}

export default App;
    export function AddOns() {
      return (
        <>
            <label htmlFor="name">Name</label>
              <input type="text" placeholder='e.g. Stephen King' name='name' />
            <label htmlFor="email">Email</label>
              <input type="text" placeholder='e.g. 8y8YU@example.com' name='email' />
            <label htmlFor="phone">Phone Number</label>
              <input type="text" placeholder='e.g. +1 234 567 890' name='phone' />
        </>
      );
    }

    export function Summary() {
      return (
        <>
            <label htmlFor="name">Name</label>
              <input type="text" placeholder='e.g. Stephen King' name='name' />
            <label htmlFor="email">Email</label>
              <input type="text" placeholder='e.g. 8y8YU@example.com' name='email' />
            <label htmlFor="phone">Phone Number</label>
              <input type="text" placeholder='e.g. +1 234 567 890' name='phone' />
        </>
      );
    }

