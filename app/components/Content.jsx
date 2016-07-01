import React from 'react';
import Education from './Education';
import Language from './Language';
import Experience from './Experience';
import Project from './Project';
import Skills from './Skills';

const Content = (props) => {
  const renderExperience = (exp) => (
    <Experience exp={exp} section={props.section_names.experience}/>
  );
  return (
    <article className="content row">
      <article className="col-6 first col">
        <Education {...props} />
        <Language {...props} />
          {props.experience.map(renderExperience)}
        <Project {...props} />
      </article>
      <article className="col-6 last col">
        <Skills {...props} />
      </article>
    </article>
  );
};


export default Content;
