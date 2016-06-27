import React, { PropTypes } from 'react';
import Section from '../wheels/Section';
const Education = (props) => {
  const education = props.education;
  return (
    <Section timeline={education.timeline}>
      <li className="timeline-item" className={`education-${education.type}`}>
        <h3 className="timeline-title">
          <time className="education-time">
            {`${education.start} ~ ${education.end}`}
          </time>
        </h3>
        <dl className="education-description timeline-content">
          <dt className="education-school">{education.school}</dt>
          <dd className="education-major">{education.major}</dd>
          <dd className="education-honor">{education.honor}</dd>
        </dl>
      </li>
    </Section>
  );
};
Education.propTypes = {
  education: PropTypes.object,
  // start: PropTypes.number,
  // end: PropTypes.number,
  // school: PropTypes.string,
  // major: PropTypes.string,
  // honor: PropTypes.string,
  // timeline: PropTypes.bool,
};
export default Education;
