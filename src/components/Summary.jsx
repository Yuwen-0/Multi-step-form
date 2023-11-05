
import PropTypes from "prop-types";
import { useState } from "react";

export default function Summary({ stepsInfo, decreaseSteps, increaseSteps, setStepsInfo, allPlans ,setStepStage}) {
  const planInfo = stepsInfo[1].info;
  const selectedPlan = allPlans.find(plan => plan.planName === planInfo.plan);
  const price = planInfo.yearly ? `$${selectedPlan.yearlyPrice}/yr` : `$${selectedPlan.monthlyPrice}/mo`;

  let totalPrice = planInfo.yearly ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice;

  stepsInfo[2].info.addOns.forEach((addOn) => {
    if (addOn.isSelected) {
      totalPrice += planInfo.yearly ? addOn.YearPrice : addOn.MonthPrice;
    }
  });

  const formDataDiv = document.querySelector(".Form-Content");

  const goBack = () => {
    setTimeout(() => {
      stepsInfo[2].isActive = true;
      stepsInfo[3].isActive = false;
      decreaseSteps();
      formDataDiv.classList.remove("FadeOut");
    }, 600);
    formDataDiv.classList.add("FadeOut");
  };

  const setInfo = () => {
    setTimeout(() => {
      stepsInfo[2].info.plan = planInfo.plan;
      stepsInfo[2].info.yearly = planInfo.yearly;
      stepsInfo[2].isActive = false;
      stepsInfo[3].isActive = true;
      increaseSteps();
      formDataDiv.classList.remove("FadeOut");
    }, 600);
    formDataDiv.classList.add("FadeOut");
  };

  const GoBackToPlans = () => {
    setTimeout(() => {
      stepsInfo[1].isActive = true;
      stepsInfo[3].isActive = false;
      setStepStage(2);
      formDataDiv.classList.remove("FadeOut");
    }, 600);
    formDataDiv.classList.add("FadeOut");
  }

  return (
    <>
    <div className="Form-Content-Summary">
      <div className="Form-Content-Title-Container">
        <h1 className="Form-Content-Title">Finishing up</h1>
        <p className="Form-Content-Subtitle">Double-check everything looks OK before confirming.</p>
        <div className="Form-Buttons Summary">
          <button onClick={goBack} className="Form-Back-Button">Go Back</button>
          <button onClick={setInfo} className="Form-Button Summary">Confirm</button>
        </div>
      </div>
      <div className="SummaryContainer">
        <div className="SummaryInfo">
          <div className="PlanInfo">
            <h1 className="PlanName">{`${planInfo.plan} (${planInfo.yearly ? "Yearly" : "Monthly"})`}</h1>
            <p onClick={GoBackToPlans} className="PlanChange">Change</p>
          </div>
          <div className="PriceInfo">
            <p className="Price">{price}</p>
          </div>
        </div>
        <hr className="SummaryHr" />
        {stepsInfo[2].info.addOns.map((addOn, index) => (
          addOn.isSelected && (
            <div className="Summary-AddOn-Container" key={index}>
              <p className="AddOnName">{addOn.title}</p>
              <p className="AddOnPrice">{stepsInfo[1].info.yearly ? `+$${addOn.YearPrice}/yr` : `+$${addOn.MonthPrice}/mo`}</p>
            </div>
          )
        ))}
      </div>
      <div className="TotalPrice">
        <p className="TotalPriceText">Total (per {planInfo.yearly ? "year" : "month"})</p>
        <p className="TotalPriceValue">{`+$${stepsInfo[1].info.yearly ? totalPrice+"/yr" : totalPrice+"/mo"}` }</p>
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
  allPlans: PropTypes.array.isRequired
};