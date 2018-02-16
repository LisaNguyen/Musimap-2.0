import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={Header} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
