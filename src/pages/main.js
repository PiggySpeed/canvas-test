import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home/home';
import SimpleGrid from './simple-grid/simple-grid.js';
import Canvas2 from './canvas-2/canvas2';
import Canvas3 from './canvas-3/canvas3';
import { ViewCol } from 'Components/view/view';

const Main = () => (
  <BrowserRouter>
    <ViewCol>
      <Route exact path='/' component={Home} />
      <Route path='/simple-grid' component={SimpleGrid} />
      <Route path='/canvas-2' component={Canvas2} />
      <Route path='/canvas-3' component={Canvas3} />
    </ViewCol>
  </BrowserRouter>
);

export default Main;