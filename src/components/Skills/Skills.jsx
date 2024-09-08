import React from "react";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className={`${classes.container} container`}>
        <hr className={`${classes.dividerTop}`} />
        <div>
          <ul className={`${classes.skillsList} container`}>
            <li>
              <p className={`${classes.skillName} text-heading-l`}>HTML</p>
              <span className="text-body">2 Years Experience</span>
            </li>
            <li>
              <p className={`${classes.skillName} text-heading-l`}>CSS</p>
              <span className="text-body">2 Years Experience</span>
            </li>
            <li>
              <p className={`${classes.skillName} text-heading-l`}>
                Javascript
              </p>
              <span className="text-body">2 Years Experience</span>
            </li>
            <li>
              <p className={`${classes.skillName} text-heading-l`}>
                Typescript
              </p>
              <span className="text-body">1 Year Experience</span>
            </li>
            <li>
              <p className={`${classes.skillName} text-heading-l`}>React</p>
              <span className="text-body">2 Years Experience</span>
            </li>
            <li>
              <p className={`${classes.skillName} text-heading-l`}>Node</p>
              <span className="text-body">2 Years Experience</span>
            </li>
          </ul>
        </div>
        <hr className={`${classes.dividerBottom}`} />
      </div>
    </section>
  );
};

export default Skills;
