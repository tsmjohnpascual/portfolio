import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div>
        <div>
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <div>
          <form action="post">
            <input type="text" />
            <input type="email" name="" id="" />
            <input type="text" />
            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
