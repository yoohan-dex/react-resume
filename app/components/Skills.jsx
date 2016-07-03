import React from 'react';
import Section from './Section';
import Skill from './Skill';
const Skills = (props) => {
  const section = props.section_names.skills;
  const renderSkill = (skill) =>
    <Skill skill={skill} />;
  return (
    <Section iteminitem section={section}>
      {props.skills.map(renderSkill)}
    </Section>
  );
};

export default Skills;
