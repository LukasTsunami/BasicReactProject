import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Menu from '../layouts/Menu';
import Footer from '../layouts/Footer';

const Routes = () => (
  <BrowserRouter>
    <>
      <Menu />

      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>

      <Footer />
    </>
  </BrowserRouter>
);


export default Routes;
