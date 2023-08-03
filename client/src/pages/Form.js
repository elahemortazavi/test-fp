import React from "react";
import "./form.css";

function Form() {
  return (
    <div className="login">
      <span className="loginTitle">
        <img
          src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
          width={200}
        />
      </span>

      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
        />

        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />

        <label>City</label>
        <select className="loginInput">
          <option value="london">London</option>
          <option value="manchester">Manchester</option>
        </select>

        <label>Role</label>
        <select className="loginInput">
          <option value="volunteer">Volunteer</option>
          <option value="trainee">Trainee</option>
        </select>

        <button className="loginButton">Login</button>
      </form>
    </div>
  );
}

export default Form;
