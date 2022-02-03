import React from 'react';
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
const BackDrop = () => {
  return ReactDOM.createPortal( <div className={classes.bg_layer}></div>,document.getElementById('backdrop_root'))
};
export default BackDrop;
