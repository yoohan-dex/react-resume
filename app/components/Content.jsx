import React from 'react';
import Education from './Education';
const Content = (props) => {
  return (
    <article className="content row">
      <article className="col-6 first col">
        <Education education={props.education} />
      </article>
      <article className="col-6 last column">
        <h2>hiosdjfiljdsf</h2>
      </article>
    </article>
  );
};

export default Content;
