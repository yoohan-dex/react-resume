import React from 'react';
import Section from './Section';
const ExperienceItem = (props) => {
  const exp = props.exp;

  const renderDescription = (desc) =>
    <dd className="exp-description-item">{desc}</dd>;
  return (
    <Section item section={exp} startTime={exp.start} endTime={exp.end}>
      <dl className="exp-description">
        <dt className="exp-place">{exp.place}</dt>
        {exp.descriptions.map(renderDescription)}
        <dd className="exp-stack"></dd>
      </dl>
    </Section>
  );
};

export default ExperienceItem;
