import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const Navigation = () => (
  <div className='navigation-container'>
    <Link className="nav-link" to='simple-grid'>simple-grid</Link>
    <Link className="nav-link" to='canvas-2'>Canvas 2</Link>
    <Link className="nav-link" to='canvas-3'>Canvas 3</Link>
  </div>
);

export default Navigation;
