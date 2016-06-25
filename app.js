import React from 'react';
import Root from './app/Root';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
// if (typeof document !== 'undefined') {
//   const initialProps = JSON.parse(document.getElementById('initial-props').innerHTML);
//   ReactDOM.render(<Root {...initialProps} />, document);
// }

function render(locals, callback) {
  const html = ReactDOMServer.renderToStaticMarkup(<Root {...locals} />);
  callback(null, `<!DOCTYPE html>${html}`);
}
export default render;
