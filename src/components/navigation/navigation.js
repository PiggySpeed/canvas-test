import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const Navigation = () => (
  <div className='navigation-container'>
    <Link className="nav-link" to='simple-grid'>simple-grid</Link>
    <Link className="nav-link" to='fractals'>fractals</Link>
    <Link className="nav-link" to='simple-3d'>simple-3d</Link>
  </div>
);

export default Navigation;
