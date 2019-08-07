import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { Discord } from './discord';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path='/' component={Home} />
        <Route path='/discord' component={Discord} />
      </div>
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <>
      <Link to='/discord'>Discord</Link>
    </>
  );
};
