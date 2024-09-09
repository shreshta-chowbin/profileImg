import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Login() {

  let navigate=useNavigate();

  let emailPasswordSpanRef=useRef();
  let emailSpanRef=useRef();
  let passwordSpanRef=useRef();
  let passwordSpanRef2=useRef();

  let emailInputRef=useRef();
  let passwordInputRef=useRef();

  let passwordIconImgRef=useRef();

  let emailRegEx= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegEx= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



  let onClickLogin=()=>{

    if(emailInputRef.current.value==="" || passwordInputRef.current.value==="")
    {
      emailPasswordSpanRef.current.innerHTML="Please enter your Email and Password";
    }

    else if(emailInputRef.current.value==="shreshtachowbin@gmail.com" && passwordInputRef.current.value==="Shresht@5")
    {
      navigate('/dashboard',{state:{email:emailInputRef.current.value}});
    }
    else if(emailInputRef.current.value==="shreshtachowbin@gmail.com" && passwordInputRef.current.value!=="Shresht@5")
    {
      emailPasswordSpanRef.current.innerHTML="Incorrect Password";
    }
    else if(passwordInputRef.current.value!=="shreshtachowbin@gmail.com")
    {
      emailPasswordSpanRef.current.innerHTML="Invalid UserName";
    }
    else
    {
      alert("Account Not Found");
    }
    
  }


  
  let emailValidation=()=>{

    let result=emailRegEx.test(emailInputRef.current.value)
    
    if(result===false)
    {
      emailSpanRef.current.innerHTML="Please enter valid Email ID";
    }
    else{
      emailSpanRef.current.innerHTML="";
    }
  }

  let passwordValidation=()=>{

    let result=passwordRegEx.test(passwordInputRef.current.value)
        
    if(result===false)
    {
       passwordSpanRef.current.innerHTML="Please enter valid Password";
       passwordSpanRef2.current.innerHTML="(1 Uppercase, 1 Lowercase, 1 Special Character, 1 Number, Minimum 8 Characters)";
    }
    else
    {
      passwordSpanRef.current.innerHTML="";
      passwordSpanRef2.current.innerHTML="";
    }
  }

  return (
    <div className='formsMainDiv'>

    <div className='imgDiv'>
      <img src='../images/brn-logo.png' alt='brnLogo'></img>
    </div>

    <div className='formsDiv'>
      <form>
        <h1>Sign In</h1>

        <span ref={emailPasswordSpanRef}></span>

        <div>
          <input placeholder='Email' ref={emailInputRef}
          onChange={()=>{
            emailValidation();
          }}
          ></input>
          <span ref={emailSpanRef}></span>
        </div>

        <div>

          <div className='passwordInput'>
          <input placeholder='Password' type='password' ref={passwordInputRef}
          onChange={()=>{
            passwordValidation();
          }}
          ></input>
        
          <div className='passwordImg'>
            <img src='./images/eye-close.png' ref={passwordIconImgRef} alt=''
            onClick={()=>{

              if(passwordInputRef.current.type==="password")
                {
                  passwordInputRef.current.type="type";
                  passwordIconImgRef.current.src='./images/eye-open.png';
                }
              else
               {
                 passwordInputRef.current.type="password";
                 passwordIconImgRef.current.src='./images/eye-close.png';
               } 
            
            }}
            ></img>
            </div>
          </div>
          <span ref={passwordSpanRef}></span>
          <span ref={passwordSpanRef2}></span>
        </div>

        
        <div className='buttonsDiv' style={{marginBottom:"20px"}}>
          <div className='submitButton'>
          <button type='button'
          onClick={()=>{
            onClickLogin();
          }}
          >LOGIN</button>
          </div>
         
          <div className='checkbox'>
          <input type='checkbox'></input>
          <label>Remember</label>
          </div>
            
          <div>
          <Link to='/forgotPassword'>Forgot Password?</Link>
          </div>  
        </div>

        <div className='createAccountDiv'>
          <button type='button'
          onClick={()=>{
            navigate("/signUp");
          }}
          >CREATE AN ACCOUNT</button>
        </div>
      </form>
    </div>

    <div className='brnLink'>
      <Link to='https://www.brninfotech.com/' target='_blank'>2024 © BRN Infotech Pvt. Ltd.</Link>
    </div>
    </div>
  )
}

export default Login
