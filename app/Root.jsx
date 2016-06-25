import React from 'react';
import Index from './components/Index';
import indexCss from './sass/index.scss';

function deleteStats(obj) {
  const newProps = {};
  for (const item in obj) {
    if (item !== 'webpackStats') {
      newProps[item] = obj[item];
    }
  }
  return newProps;
}
function safeStringify(obj) {
  return JSON.stringify(deleteStats(obj))
  .replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}
const Root = (props) => {
  const initialProps = {
    __html: safeStringify(props),
  };
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{props.title}</title>
        <p>{props.name}</p>
        <style dangerouslySetInnerHTML={{ __html: indexCss }} />
      </head>
      <body>
        <Index {...props} />
        <script
          id="initial-props"
          type="application/json"
          dangerouslySetInnerHTML={initialProps}
        />
      </body>
    </html>
  );
};


export default Root;