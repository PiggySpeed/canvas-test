import React from 'react';
import Navigation from '../../components/navigation/navigation';
import { ViewCol } from 'Components/view/view';

const Home = () => (
  <ViewCol>
    <h1>Canvas Demos</h1>
    <p style={{paddingBottom: '1rem'}}>by jlee</p>
    <Navigation />
  </ViewCol>
);

export default Home;
