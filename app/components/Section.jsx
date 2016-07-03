import React, { PropTypes } from 'react';
const Section = (props) => {
  const timeline = props.startTime ? (
    <h3 className="timeline-wrapper">
      <time className="timeline-title">
        {`${props.startTime} ~ ${props.endTime}`}
      </time>
    </h3>
  ) : null;
  const demo = props.demo? (
    <a href={props.demo} className="project-demo">DEMO</a>
  ) : null;
  const source = props.source ? (
    <a href={props.source} className="project-source">源代码</a>
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
    <section
      className={`
        ${props.item ? 'content-section-item' : 'content-section'} 
      `}
    >
      <div className="sec-title-wrapper">
        <h3 className={props.item ? 'sec-title-item' : 'sec-title'}>
          <span className={`sec${props.item ? '-item' : ''}-title-ch`}>{props.section.ch}</span>
          <span className={`sec${props.item ? '-item' : ''}-title-en`}>{props.section.en}</span>
        </h3>
        {timeline}
        <h3 className="project-link-wrapper">
          {demo}
          {source}
        </h3>
      </div>
      <div className={props.iteminitem ? 'sec-item-in-item' : 'sec-content'}>
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
