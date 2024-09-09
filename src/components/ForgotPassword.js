import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ForgotPassword() {

  let navigate=useNavigate();
  
  let emailInputRef=useRef();
  let emailSpanRef=useRef();

  let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



let emailValidation = ()=>{
  let result= emailRegEx.test(emailInputRef.current.value);
  
  if(result===false)
    {
      emailSpanRef.current.innerHTML="Please Enter Valid Email ID";
    }
    else
    {
      emailSpanRef.current.innerHTML="";
    }
  }
  
  let onClickSubmit=()=>{

    if(emailInputRef.current.value==="")
      {
        emailSpanRef.current.innerHTML="Please enter your registered Email ID";
      }
    else
      {
        emailSpanRef.current.innerHTML="Account Not Found On This Email";
      }
    }

  return (
    <div className='formsMainDiv'>

    <div className='imgDiv'>
      <img src='../images/brn-logo.png' alt='brnLogo'></img>
    </div>

    <div className='formsDiv'>
      <form>
        <h1>Forgot Password ?</h1>

        <div>
        <p>Enter your registered e-mail address below to get your password to e-mail.</p>
        </div>

        <span ref={emailSpanRef}></span>
        
        <div>
          <input placeholder='Email' ref={emailInputRef}
          onChange={()=>{
            emailValidation();
          }}
          ></input>
        </div>

        <div className='backSubmit'>
          <div className='backButton'>
          <button type='button'
          onClick={()=>{
            navigate('/');
          }}
          >Back</button>
          </div>

          <div className='submitButton'>
          <button type='button' 
          onClick={()=>{
            onClickSubmit();
          }}
          >SUBMIT</button>
          </div>
        </div>
      </form>
    </div>

    <div className='brnLink'>
      <Link to='https://www.brninfotech.com/' target='_blank'>2024 © BRN Infotech Pvt. Ltd.</Link>
    </div>
    </div>
  )
}

export default ForgotPassword
