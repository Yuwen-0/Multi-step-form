//* importing StyleSheets
import './App.css';

//* importing Components
import Steps from './components/A-Main/Steps';
import Content from './components/A-Main/Content';

import {  useRef, useState } from 'react';

function App() {

  const [activeStep, setActiveStep] = useState(3);
  const [formInfo, setFormInfo] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      country: "",
    },
    planInfo: {
      selectedPlan: "",
      isYearly: false
    }
  });


  let contentContainer = useRef(null);

  const nextStep = () => {
    setActiveStep(prev => prev + 1)
  }

  const prevStep = () => {
    setActiveStep(prev => prev - 1)
  }

  return (
    <main className="multiStepFormLayout">
      <header className='stepsShowCase'>
        <Steps activeStep={activeStep}/>
      </header>
      <div ref={contentContainer} className="contentContainer">
        <Content 
          setFormInfo={setFormInfo}
          formInfo={formInfo}
          activeStep={activeStep} 
          nextStep={nextStep}
          prevStep={prevStep}
          contentContainer={contentContainer}
        />
      </div>
    </main>
  );
}

export default App;

