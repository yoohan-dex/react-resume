import React from 'react';
import Section from './Section';
import ExperienceItem from '../wheels/ExperienceItem';
const Experience = (props) => {
  const section = props.section;
  const exp = props.exp;
  return (
    <Section section={section} startTime={exp.start} endTime={exp.end}>
    </Section>
  );
};

export default Experience;
