import React from 'react';

const Progress = (props) => {
  const cert = props.cert;
  const scoreHeight = Math.floor(cert.score / cert.full * 100);
  const style = { width: `${scoreHeight}%` };
  return (
    <dl className="language-certifications">
      <dt className="language-cert-type">{cert.type}</dt>
      <dd className="progress">
        <div className="progress-status" style={style}>
          <span className="progress-score">{cert.score}</span>
        </div>
      </dd>
    </dl>
  );
};

export default Progress;
