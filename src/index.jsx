import React from 'react';
import { render } from 'react-dom';
import './index.html';

const App = () => {
  return (
    <div>
      <header>
        <h1>React Starter</h1>
      </header>
      <main>
        <p>Moje první React stránka</p>
      </main>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
