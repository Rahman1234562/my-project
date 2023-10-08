import React, { useState } from "react";
import style from "../styles/contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, desc);

    async function postJSON(data) {
      try {
        const response = await fetch("http://localhost:3000/api/postContact", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Success:", result);
        alert("Thank you for contacting us");
        setName("");
        setEmail("");
        setPassword("");
        setDesc("")
      } catch (error) {
        console.error("Error:", error);
      }
    }

    const data = {name, email, password, desc };
    postJSON(data);
  };

  const handleChange = (e) => {
    // console.log(e, "it's change")
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={handleChange}
            type="name"
            name="name"
            value={name}
            className={style.main}
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            className={style.main}
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className={style.main}>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            className={style.main}
            id="password"
          />
        </div>
        <div className="">
          <label htmlFor="desc">Elaborate your concern</label>
          <textarea
            onChange={handleChange}
            className={style.main}
            placeholder="Leave a comment here"
            id="desc"
            name="desc"
            value={desc}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
