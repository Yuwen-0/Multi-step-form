/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css'
import Content from './components/Content';
import Step from './components/Step';
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

  const [allPlans, setAllPlans] = useState([
    {
      planName: 'Arcade',
      monthlyPrice: 9,
      imgSrc: 'assets/images/icon-arcade.svg'
    },
    {
      planName: 'Advanced',
      monthlyPrice: 12,
      imgSrc: 'assets/images/icon-advanced.svg'
    },
    {
      planName: 'Pro',
      monthlyPrice: 15,
      imgSrc: 'assets/images/icon-pro.svg'
    }
  ]);

  const steps = stepsInfo.map((step, index) => (
    <Step key={index} title={step.title} isActive={step.isActive} number={index + 1} />
  ))

  const increaseSteps = () => {
    setStepStage(prevStage => {
      if (prevStage < 4) {
        return prevStage + 1;
      }
    });
  }

  const decreaseSteps = () => {
    setStepStage(prevStage => {
      if (prevStage > 1) {
        return prevStage - 1;
      }
    })
  }

  return (
    <>
      <div className='Form-container'>
        <section className='Form-Steps'>
          {steps}
        </section>

        <section className='Form-Content'>
          <div>
            <h1 className='Form-Content-Title'>Personal info</h1>
            <p className='Form-Content-Description'>Please provide your name, email address, and phone number.</p>
          </div>
          <Content decreaseSteps={decreaseSteps} stepsInfo={stepsInfo} increaseSteps={increaseSteps} setStepsInfo={setStepsInfo} step={stepStage} allPlans={allPlans} />
        </section>
      </div>
    </>
  );
}

export default App

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

