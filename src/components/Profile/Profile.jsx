import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <section id="profile">
      <div className={`${classes.container}`}>
        <h1 className={`${classes.title}`}>
          Nice to meet you! I'm John Pascual.
        </h1>
        <p className={`${classes.introduction}`}>
          Based in the UK, I'm a full stack developer passionate about building
          accessible web apps that users love.
        </p>
        <a href="#contact" className={`${classes.contactMe}`}>
          CONTACT ME
        </a>
      </div>
    </section>
  );
};

export default Profile;
