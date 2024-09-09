import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function SignUP() {

  let navigate=useNavigate();

  let nameInputRef=useRef();
  let cityInputRef=useRef();
  let stateSelectRef=useRef();
  let mobileNoInputRef=useRef();
  let emailInputRef=useRef();
  let passwordInputRef=useRef();
  let rePasswordInputRef=useRef();
  let profileImgInputRef=useRef();
  let brnTermsInputRef=useRef();
  

  let nameSpanRef=useRef();
  let genderSpanRef=useRef();
  let MSSpanRef=useRef();
  let citySpanRef=useRef();
  let stateSpanRef=useRef();
  let mobileNoSpanRef=useRef();
  let emailSpanRef=useRef();
  let passwordSpanRef=useRef();
  let passwordSpan2Ref=useRef();
  let rePasswordSpanRef=useRef();
  let brnTermsSpanRef=useRef();
  let profileImgSpanRef=useRef();


  let selectedGender;
  let selectedMS;
  let checkboxSelected;

  let passwordIconRef=useRef();
  let rePasswordIconRef=useRef();

  let nameRegEx = /^[A-Za-z][A-Za-z ]{2,15}$/;
  let mobileNumberRegEx = /^(?:\+91|91)?[789]\d{9}$/;
  let emailRegEx= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegEx= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let cityNameRegEx = /^[A-Za-z ]{3,30}$/ ;
  

  let [userProfilePic,setUserProfilePic] =useState('./images/noImage.png');


  let onChangeEmail=()=>{

    let result= emailRegEx.test(emailInputRef.current.value)


    if(result!==true)
    {
      emailSpanRef.current.innerHTML="Please Enter Valid Email ID";
    }
  }

  let onChangePassword=()=>{

    let result=passwordRegEx.test(passwordInputRef.current.value)

    if(result===false)
    {
      passwordSpanRef.current.innerHTML="Please Enter Valid Password";
      passwordSpan2Ref.current.innerHTML="(Password must contain 1 Uppercase, 1 Lowercase, 1 Special Character, 1 Number and Minimum 8 Characters)";
    }
    else
    {
      passwordSpan2Ref.current.innerHTML="";
    }
  }

  let onChangeRePassword=()=>{
    
    if(passwordInputRef.current.value!==rePasswordInputRef.current.value)
      {
        rePasswordSpanRef.current.innerHTML="Please Re-Enter Same Password";
      }
      
  }

  let nameValidation=()=>{

    let result= nameRegEx.test(nameInputRef.current.value);

    if(result===false)
    {
      nameSpanRef.current.innerHTML="Please Enter Valid Name";
    }
  }  

  let mobileNoValidation=()=>{

    let result=mobileNumberRegEx.test(mobileNoInputRef.current.value);

    if(result!==true)
    {
      mobileNoSpanRef.current.innerHTML="Please Enter Valid Mobile No.";
    }
  }
  
  let cityNameValidation=()=>{

    let result=cityNameRegEx.test(cityInputRef.current.value);

    if(result===false)
    {
      citySpanRef.current.innerHTML="Please Enter Valid City Name";
    }
  }


  let onChangeGenderRadio=(inputRef,spanRef)=>{
    if(selectedGender==="male" || selectedGender==="female")
    {
      genderSpanRef.current.innerHTML="";
    }
  }
  
  let onChangeMSRadio=()=>{
    if(selectedMS==="single" || selectedMS==="married")
    {
      MSSpanRef.current.innerHTML="";
    }
  }

  let onChangeCheckboxTerms=()=>{
    if(checkboxSelected==="selected")
    {
      brnTermsSpanRef.current.innerHTML="";
    }
    else
    {
      brnTermsSpanRef.current.innerHTML=""
    }
  }

  let onClickSubmit=(inputRef,spanRef)=>{

    if(inputRef.current.value==="")
    {
      spanRef.current.innerHTML="This Field Is Required";
    }
  }

  let onChangeInput=(inputRef,spanRef)=>{

    if(inputRef.current.value!=="")
    {
      spanRef.current.innerHTML="";
    }
  }


  return (
    <div className='formsMainDiv'>

    <div className='imgDiv'>
      <img src='../images/brn-logo.png' alt='brnLogo'></img>
    </div>

    <div className='formsDiv'>
      <form>
        <h1>Sign Up</h1>

        <div>
        <p>Enter your name exactly as per your educational certificates.</p>
        </div>

        <div>
          <input placeholder='Name As Per Your Certificates' ref={nameInputRef}
          onChange={()=>{
            onChangeInput(nameInputRef,nameSpanRef);
            nameValidation();
          }}
          ></input>
          <span ref={nameSpanRef}></span>
        </div>

        <div className='genderMSDiv'>
          <div className='genderMSLabel'>
          <label>Gender</label>
          </div>
          <div className='genderMS'>
          <input type='radio' name='gender'
          onChange={(eventObj)=>{
            if(eventObj.target.checked===true)
            {
              selectedGender="male";
            }
            onChangeGenderRadio();
          }}
          ></input>
          <label>Male</label>
          </div>
            
          <div className='genderMS'>
          <input type='radio' name='gender'
          onChange={(eventObj)=>{
            if(eventObj.target.checked===true)
            {
              selectedGender="female";
            }
            onChangeGenderRadio();
          }}
          ></input>
          <label>Female</label>
          </div>
          <span ref={genderSpanRef}></span>
        </div>

        <div className='genderMSDiv'>
          <div className='genderMSLabel'>
          <label>Marital Status</label>
          </div>

          <div className='genderMS'>
            <input type='radio' name='MS'
            onChange={(eventObj)=>{
              if(eventObj.target.checked===true)
              {
                selectedMS="single";
              }
              onChangeMSRadio();
            }}
            ></input>
            <label>Single</label>
            </div>

            <div className='genderMS'>
            <input type='radio' name='MS'
            onChange={(eventObj)=>{
              if(eventObj.target.checked===true)
              {
                selectedMS="married";
              }
              onChangeMSRadio();
            }}
            ></input>
            <label>Married</label>
          </div>
          <span ref={MSSpanRef}></span>
        </div>

        <div className='profileImg'>
          <img src={userProfilePic} alt='imgFile'></img>
          <input type='file' ref={profileImgInputRef}
          onChange={(eObj)=>{

            let userSelectedPic = URL.createObjectURL(eObj.target.files[0]);
            setUserProfilePic(userSelectedPic);

            onChangeInput(profileImgInputRef,profileImgSpanRef);

          }}
          ></input>
          <span ref={profileImgSpanRef}></span>
        </div>

        <div>
          <input type='number' placeholder='Mobile No.' ref={mobileNoInputRef}
          onChange={()=>{
            onChangeInput(mobileNoInputRef,mobileNoSpanRef);
            mobileNoValidation();
          }}
          ></input>
          <span ref={mobileNoSpanRef}></span>
        </div>

        <div>
          <input placeholder='City/Town' ref={cityInputRef}
          onChange={()=>{
            onChangeInput(cityInputRef,citySpanRef);
            cityNameValidation();
          }}
          ></input>
          <span ref={citySpanRef}></span>
        </div>

        <div>
          <select ref={stateSelectRef}
          onChange={()=>{
            if(stateSelectRef.current.value!=="")
              {
                stateSpanRef.current.innerHTML="";
              }
          }}
          >
            <option value="">Choose Your State</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Orissa">Orissa</option>
            <option value="Pondicherry">Pondicherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttaranchal">Uttaranchal</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
          </select>
          <span ref={stateSpanRef}></span>
        </div>

        <div>
          <p>Enter Your Account Details Below:</p>
        </div>

        <div>
          <input placeholder='Email' ref={emailInputRef} style={{marginBottom:"30px"}}
          onChange={()=>{
            onChangeInput(emailInputRef,emailSpanRef);
            onChangeEmail();
          }}
          ></input>
          <span ref={emailSpanRef}></span>
        </div>

        <div>
            <div className='passwordInput'> 
          <input
          placeholder='Password' type='password' ref={passwordInputRef} 
          onChange={()=>{
            onChangeInput(passwordInputRef,passwordSpanRef);
            onChangePassword();
          }}
          ></input>

          <div className='passwordImg'>
          <img src='./images/eye-close.png' ref={passwordIconRef} alt=''
          onClick={(obj)=>{
          console.log(obj)
            if(passwordInputRef.current.type==="password")
              {
              passwordInputRef.current.type="text";
              passwordIconRef.current.src='./images/eye-open.png';
            }
            else
            {
              passwordInputRef.current.type="password";
              passwordIconRef.current.src='./images/eye-close.png';
            }

          }}

          ></img>
          </div>


          </div>


          <span ref={passwordSpanRef}></span>
          <span ref={passwordSpan2Ref}></span>
        </div>

        <div>
          <div className='passwordInput'>
          <input placeholder='Re-Enter Same Password' type='password' ref={rePasswordInputRef}
          onChange={()=>{
            onChangeInput(rePasswordInputRef,rePasswordSpanRef);
            onChangeRePassword();
          }}
          ></input>


          <div className='passwordImg'>
          <img src='./images/eye-close.png' ref={rePasswordIconRef} alt=''
          onClick={()=>{

            if(rePasswordInputRef.current.type==="password")
              {
              rePasswordInputRef.current.type="text";
              rePasswordIconRef.current.src='./images/eye-open.png';
            }
            else
            {
              rePasswordInputRef.current.type="password";
              rePasswordIconRef.current.src='./images/eye-close.png';
            }

          }}
          ></img>
          </div>
          </div>


          <span ref={rePasswordSpanRef}></span>
        </div>

        <div className='termsCheckboxDiv'>
          <div>
          <input type='checkbox' ref={brnTermsInputRef}
          onChange={(eventObj)=>{
            if(eventObj.target.checked===true)
              {
                checkboxSelected="selected";
              }
              onChangeCheckboxTerms();
            }}
            ></input>
            </div>

            <div>
          <label>I agree to the <Link to='https://docs.google.com/document/d/1UNc8jOJtjQJttCxogPfFQcXFl6gNm8iuOwiRfbkmXcw/edit' target='_blank'>Terms of Service & Privacy Policy</Link></label>
            </div>

            <div>
          <span ref={brnTermsSpanRef}></span>
            </div>
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

              if(nameInputRef.current.value==="")
              {
                nameSpanRef.current.innerHTML="Please Provide Your Name As Per Your Certificates";
              }

              if(selectedGender!=="male" && selectedGender!=="female")
              {
                genderSpanRef.current.innerHTML="Please Choose Your Gender";
              }
              else
              {
                genderSpanRef.current.innerHTML="";
              }

              if(selectedMS!=="single" && selectedMS!=="married")
              {
                MSSpanRef.current.innerHTML="Please Choose Your Status";
              }
              else
              {
                MSSpanRef.current.innerHTML="";
              } 

              if(checkboxSelected!=="selected")
              {
                brnTermsSpanRef.current.innerHTML="Please Read And Accept TNC";
              }

              if(stateSelectRef.current.value==="")
              {
                stateSpanRef.current.innerHTML="Please Select Your State";
              }

              if(profileImgInputRef.current.value==="")
              {
                profileImgSpanRef.current.innerHTML="Please Choose Your Profile Picture";
              }

              onClickSubmit(mobileNoInputRef,mobileNoSpanRef);
              onClickSubmit(cityInputRef,citySpanRef);
              onClickSubmit(emailInputRef,emailSpanRef);
              onClickSubmit(passwordInputRef,passwordSpanRef);
              onClickSubmit(rePasswordInputRef,rePasswordSpanRef);

              // let onSubmitInput={
              //   name:nameInputRef.current.value,
              //   // profileImg:profileImgInputRef.current.files,
              //   mobileNo:mobileNoInputRef.current.value,
              //   city:cityInputRef.current.value,
              //   state:stateSelectRef.current.value,
              //   email:emailInputRef.current.value,
              //   password:passwordInputRef.current.value,
              //   rePassword:rePasswordInputRef.current.value,
              // }
                
              let onSubmitSpan={
                name:nameSpanRef.current.innerHTML,
                profileImg:profileImgSpanRef.current.innerHTML,
                mobileNo:mobileNoSpanRef.current.innerHTML,
                city:citySpanRef.current.innerHTML,
                state:stateSpanRef.current.innerHTML,
                gender:genderSpanRef.current.innerHTML,
                MS:MSSpanRef.current.innerHTML,
                email:emailSpanRef.current.innerHTML,
                password:passwordSpanRef.current.innerHTML,
                rePassword:rePasswordSpanRef.current.innerHTML,
                brnTerms:brnTermsSpanRef.current.innerHTML,
              }


              if(checkboxSelected==="selected" && onSubmitSpan.gender==="" && onSubmitSpan.MS==="" && onSubmitSpan.name==="" && onSubmitSpan.mobileNo==="" && onSubmitSpan.city==="" && onSubmitSpan.state==="" && onSubmitSpan.email==="" && onSubmitSpan.password==="" && onSubmitSpan.rePassword==="" && onSubmitSpan.brnTerms==="" && onSubmitSpan.profileImg==="" )
              {
                navigate("/");
              }
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

export default SignUP
