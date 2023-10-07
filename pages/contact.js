import React from "react";
import style from "../styles/contact.module.css";

const Contact = () => {
  return (
    <div className={style.container}>
      <form>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
           Name
          </label>
          <input
            type="name"
            name="name"
            className={style.main}
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
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
            type="password"
            name="password"
            className={style.main}
            id="password"
          />
        </div>
        <div className="">
          <label htmlFor="textarea"></label>
          <textarea
            className={style.main}
            placeholder="Leave a comment here"
            id="textarea"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
