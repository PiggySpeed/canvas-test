import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  color: '#FFFFFF'
};

const BackButton = () => (
  <div className='back-btn-container'>
    <Link style={styles} to='/'>Back</Link>
  </div>
);

export default BackButton;
