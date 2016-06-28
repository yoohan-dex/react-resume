import React from 'react';
import Root from './app/Root';
import ReactDOMServer from 'react-dom/server';
import zhCN from './zhCN';
import resume from './resume';

const locals = Object.assign({}, zhCN, resume);
// if (typeof document !== 'undefined') {
//   const initialProps = JSON.parse(document.getElementById('initial-props').innerHTML);
//   ReactDOM.render(<Root {...initialProps} />, document);
// }
console.log(locals);
function render(meaningless, callback) {
  const html = ReactDOMServer.renderToStaticMarkup(<Root {...locals} />);
  callback(null, `<!DOCTYPE html>${html}`);
}
export default render;
