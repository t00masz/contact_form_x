import React from 'react';
import changeUserData from '../actions/user-actions';
import { connect } from 'react-redux';

const TextInput = (props) => (
  <div className="option">
    <input className="option__input" 
      name={props.name} type={props.type} 
      placeholder={props.placeholder} 
      value={props.value} 
      pattern={props.pattern}
      required
      onChange = {(e) => {
        props.dispatch(changeUserData(props.name, e.target.value))
      }}/>    
  </div>
);

export default connect()(TextInput);
