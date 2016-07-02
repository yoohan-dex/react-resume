import React from 'react';
import Section from './Section';
import ExperienceItem from './ExperienceItem';
const Experience = (props) => {
  const section = props.section_names.experience;
  const renderEperienceItem = (exp) =>
    <ExperienceItem exp={exp} />;
  return (
    <Section iteminitem section={section}>
      {props.experience.map(renderEperienceItem)}
    </Section>
  );
};

export default Experience;
// <dl>
      //   <dt className="exp-title-wrapper">
      //     <span className="exp-title-name">{exp.name}</span>
      //     <span className="exp-title-place">{exp.place}</span>
      //     <span className="timeline-wrapper">
      //       <time className="timeline-title">
      //         {`${props.startTime} ~ ${props.endTime}`}
      //       </time>
      //     </span>
      //   </dt>
      //   <dd></dd>
      // </dl>