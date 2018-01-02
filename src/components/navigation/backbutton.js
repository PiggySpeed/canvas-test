import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => (
  <div className='back-btn-container'>
    <Link to='/'>Back</Link>
  </div>
);

export default BackButton;
