import PropTypes from 'prop-types';
const Step = ({Stepnumber ,stepName,isActive}) => {
    return (
        <div className="step">
          <span className={`stepNumber ${isActive ? 'active' : ''}`}>{Stepnumber}</span>
          <div className="stepDescription">
            <h1 className='stepTitle'>Step {Stepnumber}</h1>
            <p className='stepText'>{stepName}</p>
          </div>
        </div>
    )
}

Step.propTypes = {
    Stepnumber: PropTypes.number,
    stepName: PropTypes.string,
    isActive: PropTypes.bool
}

const Steps = ({activeStep}) => {
    return (
        <>
            <Step Stepnumber={1} stepName="YOUR INFO" isActive={activeStep === 1}/>
            <Step Stepnumber={2} stepName="SELECT PLAN" isActive={activeStep === 2}/>
            <Step Stepnumber={3} stepName="ADD-ONS" isActive={activeStep === 3}/>
            <Step Stepnumber={4} stepName="SUMMARY" isActive={activeStep === 4}/>
        </>
    )
}

Steps.propTypes = {
    activeStep: PropTypes.number
}

export default Steps