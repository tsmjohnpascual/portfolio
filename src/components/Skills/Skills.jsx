import React from "react";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <hr className={`${classes.dividerTop}`} />
      <section id="skills">
        <div>
          <ul className={`${classes.skillsList}`}>
            <li>
              <p className={`${classes.skillName}`}>HTML</p>
              <span className={`${classes.skillExperience}`}>
                2 Years Experience
              </span>
            </li>
            <li>
              <p className={`${classes.skillName}`}>CSS</p>
              <span className={`${classes.skillExperience}`}>
                2 Years Experience
              </span>
            </li>
            <li>
              <p className={`${classes.skillName}`}>Javascript</p>
              <span className={`${classes.skillExperience}`}>
                2 Years Experience
              </span>
            </li>
            <li>
              <p className={`${classes.skillName}`}>Typescrit</p>
              <span className={`${classes.skillExperience}`}>
                1 Year Experience
              </span>
            </li>
            <li>
              <p className={`${classes.skillName}`}>React</p>
              <span className={`${classes.skillExperience}`}>
                2 Years Experience
              </span>
            </li>
            <li>
              <p className={`${classes.skillName}`}>Node</p>
              <span className={`${classes.skillExperience}`}>
                2 Years Experience
              </span>
            </li>
          </ul>
        </div>
      </section>
      <hr className={`${classes.dividerBottom}`} />
    </>
  );
};

export default Skills;
