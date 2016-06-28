import React from 'react';
import Section from './Section';

const Skills = (props) => {
  const section = props.section_names.skills;

  return (
    <Section section={section}>
      <dl></dl>
    </Section>
  );
};

export default Skills;
