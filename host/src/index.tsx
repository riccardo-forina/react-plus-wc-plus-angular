import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import 'apicurio-wc/apicurio-wc';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "apicurio-editor": any
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
