import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const Navigation = () => (
  <div className='navigation-container'>
    <Link to='canvas-1'>Canvas 1</Link>
    <Link to='canvas-2'>Canvas 2</Link>
    <Link to='canvas-3'>Canvas 3</Link>
  </div>
);

export default Navigation;
