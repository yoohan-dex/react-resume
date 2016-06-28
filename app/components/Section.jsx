import React, { PropTypes } from 'react';
const Section = (props) => {
  const timeline = props.startTime ? (
    <h3 className="timeline-wrapper">
      <time className="timeline-title">
        {`${props.startTime} ~ ${props.endTime}`}
      </time>
    </h3>
  ) : null;
  //   <div className="timeline-wrapper">
  //     <ul className="sec-content timeline">
  //       {props.children}
  //     </ul>
  //   </div>) : (
  //   <div className="sec-content">
  //     {props.children}
  //   </div>
  // );
  return (
    <section className="content-section">
      <div className="sec-title-wrapper">
        <h3 className="sec-title">
          <span className="sec-title-ch">{props.section.ch}</span>
          <span className="sec-title-en">{props.section.en}</span>
        </h3>
        {timeline}
      </div>
      <div className="sec-content">
          {props.children}
      </div>
    </section>
  );
};

Section.propTypes = {
  timeline: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
