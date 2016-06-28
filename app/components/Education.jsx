import React, { PropTypes } from 'react';
import Section from './Section';
const Education = (props) => {
  const education = props.education;
  const section = props.section_names.education;
  return (
    <Section startTime={education.start} endTime={education.end} section={section}>
      <dl className="education-description">
        <dt className="education-school">{education.school}</dt>
        <dd className="education-major">{education.major}</dd>
        <dd className="education-honor">{education.honor}</dd>
      </dl>
    </Section>
  );
};
// Education.propTypes = {
  
//   // start: PropTypes.number,
//   // end: PropTypes.number,
//   // school: PropTypes.string,
//   // major: PropTypes.string,
//   // honor: PropTypes.string,
//   // timeline: PropTypes.bool,
// };
export default Education;
