import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <section id="profile">
      <div className={`${classes.container} container`}>
        <h1 className={`${classes.title} text-heading-xl`}>
          Nice to meet you! I'm{" "}
          <span className={`${classes.underline}`}>John Pascual</span>.
        </h1>
        <p className={`${classes.introduction} text-body`}>
          Based in the UK, I'm a full stack developer passionate about building
          accessible web apps that users love.
        </p>
        <a href="#contact" className={`${classes.contactMe} text-body`}>
          CONTACT ME
        </a>
      </div>
    </section>
  );
};

export default Profile;
