import './App.css'
import Step from './components/Step';
function App() {

const Steps = ["YOUR INFO","SELECT PLAN","ADD-ONS","SUMMARY"]


  return (
    <>    
      <div className='Form-container'>
        <section className='Form-Steps'>

          {Steps.map((step, index) => {
            return <Step key={index} title={step} number={index + 1} />
          })}

        </section>

        <section className='Form-Content'>
          <div>
            <h1 className='Form-Content-Title'>YOUR INFO</h1>
            <p className='Form-Content-Description'>Please provide your personal information</p>
          </div>
        </section>
      </div>

    </>
  )
}

export default App
  