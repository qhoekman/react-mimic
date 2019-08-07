import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path='/' component={Home} />
      </div>
    </BrowserRouter>
  );
};

const Home = () => {
  return <></>;
};
