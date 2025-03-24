javascript;
CopyEdit;
import React, { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errs = {};
    if (formData.name.length <= 4)
      errs.name = "Name should be more than 4 characters";
    if (formData.age < 18 || formData.age > 40)
      errs.age = "Age should be between 18 and 40";
    if (!formData.email.includes("@")) errs.email = "Invalid Email";
    if (formData.password.length < 8)
      errs.password = "Password should be at least 8 characters";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
        <input
          name="age"
          placeholder="Age"
          type="number"
          onChange={handleChange}
        />
        {errors.age && <p>{errors.age}</p>}
        <input name="email" placeholder="Email" onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default FormComponent;
