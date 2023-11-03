/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';

import './App.css'
import Content from './components/Content';
import Step from './components/Step';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)

import PlansInfo from './Jsons/PlansInfo.json';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';

function App() {
  const [stepStage, setStepStage] = useState(3);
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
        plan: 'Arcade',
        yearly: false
      },
    },
    {
      title: 'ADD-ONS',
      number: 3,
      isActive: stepStage === 3,
      info: {
        addOns: [],
      }
    },
    {
      title: 'SUMMARY',
      number: 4,
      isActive: stepStage === 4
    }
  ]);

  console.log(stepStage);

  const formContentDiv = useRef(null);

  useEffect(() => {
    const formContent = formContentDiv.current;
    // Use formContent here
  }, []);

  const steps = stepsInfo.map((step, index) => (
    <Step key={index} title={step.title} isActive={step.isActive} number={index + 1} />
  ));

  const increaseSteps = () => {
    setStepStage(prevStage => prevStage + 1);
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

