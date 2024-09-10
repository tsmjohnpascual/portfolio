import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
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
              <Input type="text" placeholder="NAME" />
            </div>
            <div>
              <Input type="email" placeholder="EMAIL" />
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
