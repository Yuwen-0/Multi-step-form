import { useEffect, useState} from "react";

export function PersonalInfo({increaseSteps, setStepsInfo,stepsInfo }) {
  const [formData, setFormData] = useState({
    name: {
      value: "",
      valid: false,
    },
    email: {
      value: "",
      valid: false,
    },
    phone: {
      value: "",
      valid: false,
    },
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    phone: "",
  });


  useEffect(() => {
    console.log(formData);
  })

  const nameRegex = /^[a-zA-Z\p{L}\s]+$/u;
  const emailRegex = /^(?!\s)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\+[0-9]{12,12}$/;



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const urlProperties = new URLSearchParams(window.location.search);
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
    })
  };

  const setInfo = () => {
    const { name, email, phone } = formData;
    const errors = {};
  
    if (name.valid && email.valid && phone.valid) {
      // Your existing code for updating stepsInfo when the data is valid
      // ...
  
      increaseSteps();
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
        const name = input.getAttribute("name");
        if (errors[name]) {
          input.classList.add("Invalid");
        } else {
          input.classList.remove("Invalid");
        }
      });
    }
  }
  
  
  

  return (
    <>
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
          {formError.email && <span className="Error">{formError.email}</span>}
        </label>
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
          value={formData.phone.value}
          type="tel"
          placeholder="e.g. +1 234 567 890"
          name="phone"
        />
      </div>
        <button
         onClick={setInfo}
         className='Form-Button'>Next Step</button>
    </>
  );
}
