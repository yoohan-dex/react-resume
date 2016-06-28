import React from 'react';
import Education from './Education';
import Language from './Language';
import Experience from './Experience';
import Skills from './Skills';
const Content = (props) => (
  <article className="content row">
    <article className="col-6 first col">
      <Education {...props} />
      <Language {...props} />
      <Experience {...props} />
    </article>
    <article className="col-6 last col">
      <Skills {...props} />
    </article>
  </article>
);


export default Content;
