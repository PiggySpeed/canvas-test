import './index.less';
import React from 'react';
import PropTypes from 'prop-types';

export const ViewRow = ({ children, style, className, onBlur }) => {
  return (
    <div style={style} className={'view-row ' + (className || '')} onBlur={onBlur}>
      {children}
    </div>
  )
};
ViewRow.propTypes = {
  children:             PropTypes.node,
  className:            PropTypes.string,
  onBlur:               PropTypes.func
};

export const ViewCol = ({ children, style, className, onBlur }) => {
  return (
    <div style={style} className={'view-col ' + (className || '')} onBlur={onBlur}>
      {children}
    </div>
  )
};
ViewCol.propTypes = {
  children:             PropTypes.node,
  className:            PropTypes.string,
  onBlur:               PropTypes.func
};
