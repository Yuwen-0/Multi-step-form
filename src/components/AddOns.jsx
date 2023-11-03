import PropTypes from 'prop-types';
import AddOn from './AddOn';

import { useState } from 'react';

export default function AddOns({ decreaseSteps, increaseSteps, stepsInfo }) {
  const formDataDiv = document.querySelector(".Form-Content");

  const [addOnsData, setAddOnsData] = useState([
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      MPrice: 1,
      YPrice: 10,
      monthlyPrice: '+$1/mo',
      yearlyPrice: '+$10/yr',
      isSelected: false,
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      MPrice: 2,
      YPrice: 20,
      monthlyPrice: '+$2/mo',
      yearlyPrice: '+$20/yr',
      isSelected: false,
    },
    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      MPrice: 2,
      YPrice: 20,
      monthlyPrice: '+$2/mo',
      yearlyPrice: '+$20/yr',
      isSelected: false,
    },
  ]);

  function SetInfo() {
    const addonsData = [];
    addOnsData.map((addOn) => {
      const addonData = {
        YearPrice: addOn.YPrice,
        MonthPrice: addOn.MPrice,
        isSelected: addOn.isSelected,
      }
      addonsData.push(addonData)
    })

    stepsInfo[2].info.addOns = addonsData

    setTimeout(() => {
      stepsInfo[1].info.addOns = addOnsData
      stepsInfo[2].isActive = false
      stepsInfo[3].isActive = true
      increaseSteps();
      formDataDiv.classList.remove("FadeOut")
    }, 600);
    formDataDiv.classList.add("FadeOut")
  }


  function goBack() {
    setTimeout(() => {
      stepsInfo[1].isActive = true
      stepsInfo[2].isActive = false
      decreaseSteps();
      formDataDiv.classList.remove("FadeOut")
    }, 600);
    formDataDiv.classList.add("FadeOut")
  }

  function select(e) {
    const updatedAddOnsData = addOnsData.map((addOn) => {
      if (addOn.title === e.target.id) {
        addOn.isSelected = !addOn.isSelected;
      }
      return addOn; 
    });
  
    setAddOnsData(updatedAddOnsData);
  }

  return (
    <>
      <div className="Form-Content-Title-Container">
        <h1 className="Form-Content-Title">Pick add-ons</h1>
        <p className="Form-Content-Subtitle">Add-ons help enhance your gaming experience</p>
      </div>
      <div className="AddOns">
        {addOnsData.map((addOn, index) => (
          <AddOn
          key={index}
          title={addOn.title}
          description={addOn.description}
          monthlyPrice={addOn.monthlyPrice}
          yearlyPrice={addOn.yearlyPrice}
          onClick={select}
          isSelected={addOn.isSelected}
          isYearly={stepsInfo[1].info.yearly}
          />
          ))}
      </div>
      <div className="Form-Buttons">
        <button onClick={goBack} className="Form-Back-Button">Go Back</button>
        <button onClick={SetInfo} className="Form-Button">Next Step</button>
      </div>
    </>
  );
}

AddOns.propTypes = {
  decreaseSteps: PropTypes.func.isRequired,
  increaseSteps: PropTypes.func.isRequired,
  stepsInfo: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
}
