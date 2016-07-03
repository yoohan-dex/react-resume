import React from 'react';
import Section from './Section';

const Skill = (props) => {
  const skill = props.skill;
  const renderDescription = (desc) =>
    <dd className="skill-description-item">{desc}</dd>;
  return (
    <Section item section={skill}>
      <dl className="skill-description">
        <dt className="skill-brief">{skill.brief}</dt>
        {skill.descriptions.map(renderDescription)}
      </dl>
    </Section>
  );
};

export default Skill;
