import React from 'react';
import Image from "../image1.png";

import './Register.css';

export default function Register() {
  return (
    <div>
    <div className="RegisterParentDiv">
      <img width="200px" height="200px" src={Image} ></img>
     <div className='heading'> <h4>Registration</h4></div>
      <form>
        
        
        <input
          className="input"
          type="text"
          id="fname"
          placeholder='Enter Store Name'
          
        />
        
        <br />
        <input
          className="input"
          type="text"
          id="lname"
          placeholder='Enter Referral Code (Optional)'
          
        />
        <br />
        <div className="buttons">
          <button className='button'><img src="https://depositphotos.com/77064803/stock-illustration-woman-fashion-icon-or-logo.html" alt="" /></button>
          <button className='button'>grocery</button>
          <button className='button'>Electronic</button>

        </div>
        
        <button className='reg'>Register</button>
      </form>
      
    </div>
  </div>
  );
}
