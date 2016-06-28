import React from 'react';
import Index from './components/Index';
import indexCss from './sass/index.scss';


const Root = (props) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{props.title}</title>
      <style dangerouslySetInnerHTML={{ __html: indexCss }} />
    </head>
    <body>
      <Index {...props} />
    </body>
  </html>
);



export default Root;
