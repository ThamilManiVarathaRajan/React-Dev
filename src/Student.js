import React from 'react'
import { useState } from 'react';

const Student = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    class: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      formData,
      [name]: value, // Update the corresponding field
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Submitted:", formData);
    // Add your API call or other submission logic here
    alert("Form Submitted!");
    setFormData({ name: "", age: "", class: "", email: "" }); // Reset form
  };

  return (
    <div style={{ margin: "20px auto", maxWidth: "400px" }}>
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", width: "100%" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", width: "100%" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Class:
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", width: "100%" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", width: "100%" }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Student
