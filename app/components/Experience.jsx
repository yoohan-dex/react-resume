import React from 'react';
import Section from './Section';
import ExperienceItem from '../wheels/ExperienceItem';
const Experience = (props) => {
  const section = props.section_names.experience;
  return (
    <Section section={section}>
      <ExperienceItem />
    </Section>
  );
};

export default Experience;
