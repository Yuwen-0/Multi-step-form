import { useState } from 'react';
import './App.css'
import Step from './components/Step';
function App() {
const [Steps, setSteps] = useState(
  [
    {
      title: 'YOUR INFO',
      number: 1,
      isActive: true
    },
    {
      title: 'SELECT PLAN',
      number: 2,
      isActive: false
    },
    {
      title: 'ADD-ONS',
      number: 3,
      isActive: false
    },
    {
      title: 'SUMMARY',
      number: 4,
      isActive: false
    }
  ]
);


  return (
    <>    
      <div className='Form-container'>
        <section className='Form-Steps'>

          {Steps.map((step, index) => {
            return <Step key={index} title={step.title} isActive={step.isActive} number={index + 1} />
          })}

        </section>

        <section className='Form-Content'>
          <div>
            <h1 className='Form-Content-Title'>Personal info</h1>
            <p className='Form-Content-Description'>Please provide your name , email address and phone number.</p>
          </div>
          <div className='Form-Content-Inputs'>
            <label htmlFor="name">Name</label>
              <input type="text" placeholder='e.g. Stephen King' name='name' />
            <label htmlFor="email">Email</label>
              <input type="text" placeholder='e.g. 8y8YU@example.com' name='email' />
            <label htmlFor="phone">Phone Number</label>
              <input type="text" placeholder='e.g. +1 234 567 890' name='phone' />
          </div>
          <section className='Form-Button-Container'>
            <button className='Form-Button'>Next Step</button>
          </section>
        </section>

      </div>

    </>
  )
}

export default App
  