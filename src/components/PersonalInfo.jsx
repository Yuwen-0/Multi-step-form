import { useState } from "react";
import PropTypes from 'prop-types';

export default function PersonalInfo({ increaseSteps, setStepsInfo, stepsInfo,stepNumb }) {
  const [formData, setFormData] = useState({
    name: {
      value: stepsInfo[0].info.name.value || "",
      valid: stepsInfo[0].info.name.valid || false,
    },
    email: {
      value: stepsInfo[0].info.email.value || "",
      valid: stepsInfo[0].info.email.valid || false,
    },
    phone: {
      value: stepsInfo[0].info.phone.value || "",
      valid: stepsInfo[0].info.phone.valid || false,
    },
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const formContentDiv = document.querySelector(".Form-Content");
  const nameRegex = /^[a-zA-Z\p{L}\s]+$/u;
  const emailRegex = /^(?!\s)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\+[0-9]{12,12}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const error = {};

    if (name === "name" && !nameRegex.test(value)) {
      error.name = "Please enter a valid name";
    } else if (name === "email" && !emailRegex.test(value)) {
      error.email = "Please enter a valid email";
    } else if (name === "phone" && !phoneRegex.test(value)) {
      error.phone = "Please enter a valid phone number";
    } else {
      error[name] = "";
    }

    setFormError({ ...formError, ...error });
    setFormData({
      ...formData,
      [name]: {
        value: value,
        valid: !error[name],
      },
    });
  };

  const setInfo = () => {
    const { name, email, phone } = formData;
    const errors = {};

    if (name.valid && email.valid && phone.valid && stepNumb === 1) {
      
      const indexToUpdate = stepsInfo.findIndex((step) => step.title === "YOUR INFO");

      if (indexToUpdate !== -1) {
        const updatedStep = {
          ...stepsInfo[indexToUpdate],
          info: {
            name: {
              value: name.value,
              valid: true
            },
            email: {
              value: email.value,
              valid: true
            },
            phone: {
              value: phone.value,
              valid: true
            },
          },
        };

        const updatedSteps = [...stepsInfo];
        updatedSteps[indexToUpdate] = updatedStep;

        if (indexToUpdate < stepsInfo.length - 1) {
          updatedSteps[indexToUpdate + 1].isActive = true;
          updatedSteps[indexToUpdate].isActive = false;
        }

        setTimeout(() => {
          increaseSteps();
          setStepsInfo(updatedSteps);
          formContentDiv.classList.remove("FadeOut");
        }, 600);
        formContentDiv.classList.add("FadeOut")
        
      }
    } else {
      // Set individual error messages for each field
      if (!name.valid) {
        errors.name = "Please enter a valid name";
      }
      if (!email.valid) {
        errors.email = "Please enter a valid email";
      }
      if (!phone.valid) {
        errors.phone = "Please enter a valid phone number";
      }

      setFormError(errors);

      // Add the "Invalid" class to the input fields with errors
      const inputs = document.querySelectorAll(".Content-Inputs");
      inputs.forEach((input) => {
        const inputName = input.getAttribute("name");
        if (errors[inputName]) {
          input.classList.add("Invalid");
        } else {
          input.classList.remove("Invalid");
        }
      });
    }

  };
  
    

  return (
    <>
      <div className="Form-Button-Container PersonalInfo">
        <button onClick={setInfo} className="Form-Button Personal-Info">
          Next Step
        </button>
      </div>
      <div className="Form-Content-Title-Container">
        <h1 className='Form-Content-Title'>Personal info</h1>
        <p className='Form-Content-Description'>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="Input">
        <label className="Input-labels" htmlFor="name">
          Name
        </label>
        {formError.name && <span className="Error">{formError.name}</span>}
        <input
          className={formError.name ? "Content-Inputs Invalid" : "Content-Inputs"}
          onChange={handleInputChange}
          type="text"
          placeholder="e.g. Stephen King"
          name="name"
          value={formData.name.value}
        />
      </div>
      <div className="Input">
        <label className="Input-labels" htmlFor="email">
          Email
        </label>
        {formError.email && <span className="Error">{formError.email}</span>}
        <input
          className={formError.email ? "Content-Inputs Invalid" : "Content-Inputs"}
          onChange={handleInputChange}
          type="email"
          placeholder="e.g. 8y8YU@example.com"
          name="email"
          value={formData.email.value}
        />
      </div>
      <div className="Input">
        <label className="Input-labels" htmlFor="phone">
          Phone Number
        </label>
        {formError.phone && <span className="Error">{formError.phone}</span>}
        <input
          className={formError.phone ? "Content-Inputs Invalid" : "Content-Inputs"}
          onChange={handleInputChange}
          type="tel"
          placeholder="e.g. +1 234 567 890"
          name="phone"
          value={formData.phone.value}
        />
      </div>
    </>
  );
}

PersonalInfo.propTypes = {
  increaseSteps: PropTypes.func.isRequired,
  setStepsInfo: PropTypes.func.isRequired,
  stepsInfo: PropTypes.array.isRequired,
  stepNumb: PropTypes.number.isRequired
}

