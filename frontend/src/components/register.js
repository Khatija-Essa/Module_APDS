import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  function updateForm(value) {
    setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newPerson = { ...form };

    await fetch("http://localhost:3001/user/signup", {
      method: "POST", // Fix the syntax here
      headers: {
        "Content-Type": "application/json", // Fix the key name
      },
      body: JSON.stringify(newPerson),
    })
      .catch((error) => {
        window.alert(error);
        return;
      });

    setForm({ name: "", password: "" });
    navigate("/");
  }

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password" // You might want to change this to 'password' for security
            className="form-control"
            id="password"
            value={form.password} // Fix the typo here
            onChange={(e) => updateForm({ password: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
