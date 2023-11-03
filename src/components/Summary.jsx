
import PropTypes from "prop-types";

export default function Summary({ stepsInfo, decreaseSteps, increaseSteps, setStepsInfo }) {
  return (
    <>
      <div className="Form-Content-Title-Container">
        <h1 className="Form-Content-Title">Finishing up</h1>
        <p className="Form-Content-Subtitle">Double-check everything looks OK before confirming.</p>
      </div>
      <div className="SummaryContainer">
        <div className="SummaryInfo">
          <div className="PlanInfo">
            <h1 className="PlanName">{stepsInfo[1].info.plan + " (" + (stepsInfo[1].info.yearly ? "Yearly" : "Monthly") + ")"}</h1>
            <p className="PlanChange">Change</p>
          </div>
          <div className="PriceInfo">
            <p>{stepsInfo[1].info.yearly ? stepsInfo[1].info.yearlyPrice : stepsInfo[1].info.monthlyPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
}

Summary.propTypes = {
  stepsInfo: PropTypes.array.isRequired,
  decreaseSteps: PropTypes.func.isRequired,
  increaseSteps: PropTypes.func.isRequired,
  setStepsInfo: PropTypes.func.isRequired,
};