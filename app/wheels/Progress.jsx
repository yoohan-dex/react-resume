import React from 'react';

const Progress = (props) => {
  const cert = props.cert;
  const scoreHeight = Math.floor(cert.score / cert.full);
  const style = { height: `${scoreHeight}px` };
  return (
    <dl className="language-certifications">
      <dt className="language-cert-type">{cert.type}</dt>
      <dd className="progress language-cert-score">
        <div className="progress-bar" style={style}></div>
      </dd>
    </dl>
  );
};

export default Progress;
