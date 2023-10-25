import { useState } from "react";

export function PersonalInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const nameRegex = /^[\p{L}\s]+$/u; // Allow letters, spaces, and unicode characters
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^\+?[0-9\s-()]*$/


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const error = {};

    if (name === "name" && !nameRegex.test(value)) {
      error.name = "Please enter a valid name";
    } else if (name === "email" && !emailRegex.test(value)) {
      error.email = "Please enter a valid email";
    } else if (name === "phone" && !phoneRegex.test(value)) {
      error.phone = "Please enter a valid phone number";
    }

    setFormError({ ...formError, ...error });
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <div className="Input">
      <label className="Input-labels" htmlFor="name">Name</label>
      {formError.name && <span className="Error">{formError.name}</span>}
      <input
        className="Content-Inputs"
        onChange={handleInputChange}
        type="text"
        placeholder="e.g. Stephen King"
        name="name"
        value={formData.name}
      />
    </div>
      <div className="Input">
        <label className="Input-labels" htmlFor="email">Email
        {formError.email && <span className="Error">{formError.email}</span>}
        </label>
        <input
          className="Content-Inputs"
          onChange={handleInputChange}
          type="email"
          placeholder="e.g. 8y8YU@example.com"
          name="email"
          value={formData.email}
        />
      </div>

      <div className="Input">
        <label className="Input-labels" htmlFor="phone">Phone Number</label>
        {formError.phone && <span className="Error">{formError.phone}</span>}
        <input
          className="Content-Inputs"
          onChange={handleInputChange}
          value={formData.phone}
          type="text"
          placeholder="e.g. +1 234 567 890"
          name="phone"
        />
      </div>
    </>
  );
}
