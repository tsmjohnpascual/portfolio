import React from "react";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className={`${classes.container}`}>
        <hr className={`${classes.dividerTop}`} />
        <div>
          <ul className={`${classes.skillsList}`}>
            <li>
              <p className={`${classes.skillName} text-heading-l`}>HTML</p>
              <span className={`${classes.skillExperience} text-body`}>
                2 Years Experience
              </span>
            </li>
            <li>
              <p className={`${classes.skillName} text-heading-l`}>CSS</p>
              <span className={`${classes.skillExperience} text-body`}>
                2 Years Experience
              </span>
            </li>
            <li>
              <p className={`${classes.skillName} text-heading-l`}>
                Javascript
              </p>
              <span className={`${classes.skillExperience} text-body`}>
                2 Years Experience
              </span>
            </li>
            <li>
              <p className={`${classes.skillName} text-heading-l`}>
                Typescript
              </p>
              <span className={`${classes.skillExperience} text-body`}>
                1 Year Experience
              </span>
            </li>
            <li>
              <p className={`${classes.skillName} text-heading-l`}>React</p>
              <span className={`${classes.skillExperience} text-body`}>
                2 Years Experience
              </span>
            </li>
            <li>
              <p className={`${classes.skillName} text-heading-l`}>Node</p>
              <span className={`${classes.skillExperience} text-body`}>
                2 Years Experience
              </span>
            </li>
          </ul>
        </div>
        <hr className={`${classes.dividerBottom}`} />
      </div>
    </section>
  );
};

export default Skills;
