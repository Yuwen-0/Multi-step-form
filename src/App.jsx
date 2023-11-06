//* importing StyleSheets
import './App.css';

//* importing Components
import Steps from './components/A-Main/Steps';
import Content from './components/A-Main/Content';

import { useState } from 'react';

function App() {

  const [activeStep, setActiveStep] = useState(1);

  return (
    <main className="multiStepFormLayout">
      <header className='stepsShowCase'>
        <Steps activeStep={activeStep}/>
      </header>
      <Content activeStep={activeStep}/>
    </main>
  );
}

export default App;

