import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className={`${classes.container}`}>
        <div className={`${classes.innerContainer}`}>
          <h2 className={`${classes.contact} text-heading-xl`}>Contact</h2>
          <p className={`${classes.contactParagraph} text-body`}>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <div>
          <form action="post">
            <div className={`${classes.formContainer}`}>
              <div>
                <input
                  type="text"
                  className={`${classes.input}`}
                  placeholder="NAME"
                />
                <hr />
              </div>
              <div>
                <input
                  type="email"
                  name=""
                  id=""
                  className={`${classes.input}`}
                  placeholder="EMAIL"
                />
                <hr />
              </div>
              <div>
                <textarea
                  className={`${classes.input} ${classes.textarea}`}
                  placeholder="MESSAGE"
                />
                <hr />
              </div>
              <div className={`${classes.buttonContainer}`}>
                <button type="submit" className={`${classes.button} text-body`}>
                  SEND MESSAGE
                  <hr />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
