import React, { PropTypes } from 'react';
import secs from '../zh_CN';
const sec = secs.section_names.education;
const Section = (props) => {
  const content = props.timeline ? (
    <div className="timeline-wrapper">
      <ul className="sec-content timeline">
        {props.children}
      </ul>
    </div>) : (
    <div className="sec-content">
      {props.children}
    </div>
  );
  return (
    <section>
      <div className="sec-title-wrapper">
        <h3 className="sec-title">
          <span className="sec-title-ch">{sec.ch}</span>
          <span className="sec-title-en">{sec.en}</span>
        </h3>
        {content}
      </div>
    </section>
  );
};

Section.propTypes = {
  timeline: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
