/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
    <>
      <Router>
        <div className='Form-container'>
          <section className='Form-Steps'>
            {steps}
          </section>

          <section className='Form-Content'>
            <Switch>
              <Route exact  path=''>
                <Content 
                  stepsInfo={stepsInfo} 
                  setStepsInfo={setStepsInfo} 
                  step={stepStage} 
                  allPlans={PlansInfo} 
                  increaseSteps={increaseSteps}
                />
              </Route>
              <Route  path='/personal-info'>
                <PersonalInfo 
                  stepsInfo={stepsInfo} 
                  setStepsInfo={setStepsInfo} 
                  step={stepStage} 
                  allPlans={PlansInfo} 
                  increaseSteps={increaseSteps}
                />
              </Route>
              <Route exact path='select-plan'>
                <SelectPlan 
                  stepsInfo={stepsInfo} 
                  setStepsInfo={setStepsInfo} 
                  step={stepStage} 
                  allPlans={PlansInfo} 
                  decreaseSteps={decreaseSteps}
                />
              </Route>
            </Switch>
          </section>
        </div>
      </Router>
    </>
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

