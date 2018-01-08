import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home/home';
import SimpleGrid from './simple-grid/simple-grid.js';
import Fractals from './fractals/fractals';
import Simple3d from './simple-3d/simple-3d';
import { ViewCol } from 'Components/view/view';

const Main = () => (
  <BrowserRouter>
    <ViewCol>
      <Route exact path='/' component={Home} />
      <Route path='/simple-grid' component={SimpleGrid} />
      <Route path='/fractals' component={Fractals} />
      <Route path='/simple-3d' component={Simple3d} />
    </ViewCol>
  </BrowserRouter>
);

export default Main;