//* importing StyleSheets
import './App.css';

//* importing Components
import Steps from './components/A-Main/Steps';
import Content from './components/A-Main/Content';

import { useState } from 'react';

function App() {

  const [activeStep, setActiveStep] = useState(1);

  let NextbuttonText;
  if (activeStep < 4) {
    NextbuttonText = 'Next Step';
  }else if (activeStep === 4) {
    NextbuttonText = 'Submit';
  }

  let PrevbuttonText;
  if (activeStep > 1) {
    PrevbuttonText = 'go back';
  }else if (activeStep === 1) {
    PrevbuttonText = '';
  }

  return (
    <main className="multiStepFormLayout">
      <header className='stepsShowCase'>
        <Steps activeStep={activeStep}/>
      </header>
      <Content activeStep={activeStep}>
        <div>
          <button className={!PrevbuttonText ? 'hidden prevButton' : 'prevButton'}>{PrevbuttonText}</button>
          <button className="nextButton">{NextbuttonText}</button>
        </div>
      </Content>
    </main>
  );
}

export default App;

