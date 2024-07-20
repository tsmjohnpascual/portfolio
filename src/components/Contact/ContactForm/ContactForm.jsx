import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder="NAME" />
        <input type="text" placeholder="EMAIL" />
        <input type="text" placeholder="MESSAGE" />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
