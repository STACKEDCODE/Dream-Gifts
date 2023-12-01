import './index.css';

import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found',
  );
}

render(() => (
  <Router>
    <App />
  </Router>
), document.getElementById('root') || document.body);
