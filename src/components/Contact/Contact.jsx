import React from "react";
import Button from "../Button/Button";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className={`${classes.container} container`}>
        <div className={`${classes.innerContainer} container`}>
          <h2 className={`${classes.contact} text-heading-xl`}>Contact</h2>
          <p className={`${classes.contactParagraph} text-body`}>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <form action="post">
          <div className={`${classes.formContainer} container`}>
            <div>
              <input
                type="text"
                className={`${classes.input} text-body`}
                placeholder="NAME"
              />
              <hr />
            </div>
            <div>
              <input
                type="email"
                name=""
                id=""
                className={`${classes.input} text-body`}
                placeholder="EMAIL"
              />
              <hr />
            </div>

            <textarea
              className={`${classes.textarea} text-body`}
              placeholder="MESSAGE"
            />

            <div className={`${classes.buttonContainer}`}>
              <Button type={"submit"} text={"SEND MESSAGE"} />
            </div>
          </div>
        </form>
      </div>
      <hr />
    </section>
  );
};

export default Contact;
