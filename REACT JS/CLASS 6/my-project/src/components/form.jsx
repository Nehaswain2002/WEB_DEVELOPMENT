
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";

const Form = () => {
  //   const emailRef = useRef();
  //   const passwordRef = useRef();
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleEmail = (e) => {
  //     setEmail(e.target.value);
  //   };
  //   const handlePassword = (e) => {
  //     setPassword(e.target.value);
  //   };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${JSON.stringify(formData)}`);
    console.log(`Submitted: ${JSON.stringify(formData)}`);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    // console.log(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div>
      {/* <div>
        <input
          // onChange={handleEmail}
          ref={emailRef}
          className="border-2"
          type="email"
          placeholder="Enter your email"
        />
        <input
          // onChange={handlePassword}
          ref={passwordRef}
          className="border-2"
          type="password"
          placeholder="Enter your password"
        />
        <button onClick={handleSubmit} className="border-2">
          Submit
        </button>
      </div> */}

      {/* signUp form */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter name"
          className="border-2"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter email"
          className="border-2"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Enter password"
          className="border-2"
        />
        <button type="submit" className="border-2">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Form;