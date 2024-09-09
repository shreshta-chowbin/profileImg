import React, { useRef } from 'react'
import TopNavigation from './TopNavigation';

function InterForm() {


  let nameRegEx = /^[A-Za-z][A-Za-z ]{2,15}$/;
  
  
    let eng1InputRef=useRef();
    let sans1InputRef=useRef();
    let mathsA1InputRef=useRef();
    let mathsB1InputRef=useRef();
    let phy1InputRef=useRef();
    let chem1InputRef=useRef();
    
    let eng2InputRef=useRef();
    let sans2InputRef=useRef();
    let mathsA2InputRef=useRef();
    let mathsB2InputRef=useRef();
    let phy2InputRef=useRef();
    let chem2InputRef=useRef();
    let phyPracInputRef=useRef();
    let chemPracInputRef=useRef();
    
    let eng1SpanRef=useRef();
    let sans1SpanRef=useRef();
    let mathsA1SpanRef=useRef();
    let mathsB1SpanRef=useRef();
    let phy1SpanRef=useRef();
    let chem1SpanRef=useRef();
    
    let eng2SpanRef=useRef();
    let sans2SpanRef=useRef();
    let mathsA2SpanRef=useRef();
    let mathsB2SpanRef=useRef();
    let phy2SpanRef=useRef();
    let chem2SpanRef=useRef();
    let phyPracSpanRef=useRef();
    let chemPracSpanRef=useRef();
    
    let totMarks1ParaRef=useRef();
    let totMarks2ParaRef=useRef();
    let result12ParaRef=useRef();

    let totMarks1ParaRef2=useRef();
    let totMarks2ParaRef2=useRef();
    let result12ParaRef2=useRef();


    let genderSpanRef=useRef();
    let parentRelationSpanRef=useRef();
    
    let totMarks1FieldsetRef=useRef();
    let totMarks2FieldsetRef=useRef();
    let result12FieldsetRef=useRef();
    
    
    let stuNameInputRef=useRef();
    let parentNameInputRef=useRef();

    let stuNameSpanRef=useRef();
    let parentNameSpanRef=useRef();

    let maleRadioInputRef=useRef();
    let femaleRadioInputRef=useRef();
    
    
    let nameSpanRef=useRef();
    let nameSpan2Ref=useRef();
    
    
    let selectedGender;
    let parentSelected;
    let salutation;
    let parentSalutation;
    let patronymic;
    
    let pass100= 35;
    let pass75= 26.25;
    let pass60= 21;
    let pass30= 10.5;

    
    
    // let name={
    //     stuName:stuNameInputRef.current.value,
    //     parentName:parentNameInputRef.current.value,
    // }
        
    // let inter1={
    //     eng1:Number(eng1InputRef.current.value),
    //     sans1:Number(sans1InputRef.current.value),
    //     mathsA1:Number(mathsA1InputRef.current.value),
    //     mathsB1:Number(mathsB1InputRef.current.value),
    //     phy1:Number(phy1InputRef.current.value),
    //     chem1:Number(chem1InputRef.current.value),
    // }
  
    // let inter2= {            
    //   eng2:eng2InputRef.current.value,
    //   sans2:sans2InputRef.current.value,
    //   mathsA2:mathsA2InputRef.current.value,
    //   mathsB2:mathsB2InputRef.current.value,
    //   phy2:phy2InputRef.current.value,
    //   chem2:chem2InputRef.current.value,
    //   phyPrac:phyPracInputRef.current.value,
    //   chemPrac:chemPracInputRef.current.value,
    //  }
    

    let nameValidation=(inputRef,spanRef)=>{

        let result=nameRegEx.test(inputRef.current.value);
        
        if(result===false)
        {
            spanRef.current.innerHTML="Please Enter Valid Name";
            spanRef.current.style.backgroundColor="aliceblue";
        }
        else
        {
            spanRef.current.innerHTML="";
            spanRef.current.style.backgroundColor="";
        }
    }

    let stuDetailsSpanRef=(inputRef,spanRef)=>{
        if(inputRef.current.value==="")
        {
            spanRef.current.innerHTML="This field is required";
            spanRef.current.style.backgroundColor="aliceblue";
        }
        else
        {
            spanRef.current.innerHTML="";
            spanRef.current.style.backgroundColor="";
        }
    }

    let onBlurSpan100=(inputRef,spanRef)=>{
        if(inputRef.current.value>0 && inputRef.current.value<=100)
        {
            if(inputRef.current.value<35)
            {
                spanRef.current.innerHTML="FAIL";
                spanRef.current.style.color="white";
                spanRef.current.style.backgroundColor="red";
            }
            else
            {
                spanRef.current.innerHTML="PASS";
                spanRef.current.style.color="white";
                spanRef.current.style.backgroundColor="lightgreen";
            }
        }
        else
        {
            inputRef.current.value="";
        }

        if(inputRef.current.value==="")
        {
            spanRef.current.innerHTML="Enter Your Marks";
            spanRef.current.style.color="red";
            spanRef.current.style.backgroundColor="aliceblue";
        }
    }
    
    let onBlurSpan75=(inputRef,spanRef)=>{
        if(inputRef.current.value>0 && inputRef.current.value<=75)
        {
            if(inputRef.current.value<26.24)
            {
                spanRef.current.innerHTML="FAIL";
                spanRef.current.style.color="white";
                spanRef.current.style.backgroundColor="red";
            }
            else
            {
                spanRef.current.innerHTML="PASS";
                spanRef.current.style.color="white";
                spanRef.current.style.backgroundColor="lightgreen";
            }
        }
        else
        {
            inputRef.current.value="";
        }

        if(inputRef.current.value==="")
        {
            spanRef.current.innerHTML="Enter Your Marks";
            spanRef.current.style.color="red";
            spanRef.current.style.backgroundColor="aliceblue";
        }
    }
    
    let onBlurSpan60=(inputRef,spanRef)=>{
        if(inputRef.current.value>0 && inputRef.current.value<=60)
        {
            if(inputRef.current.value<21)
            {
                spanRef.current.innerHTML="FAIL";
                spanRef.current.style.color="white";
                spanRef.current.style.backgroundColor="red";
            }
            else
            {
                spanRef.current.innerHTML="PASS";
                spanRef.current.style.color="white";
                spanRef.current.style.backgroundColor="lightgreen";
            }
        }
        else
        {
            inputRef.current.value="";
        }

        if(inputRef.current.value==="")
        {
            spanRef.current.innerHTML="Enter Your Marks";
            spanRef.current.style.color="red";
            spanRef.current.style.backgroundColor="aliceblue";
        }
    }

    let onBlurSpan30=(inputRef,spanRef)=>{
        if(inputRef.current.value>0 && inputRef.current.value<=30)
        {
            if(inputRef.current.value<10.5)
            {
                spanRef.current.innerHTML="FAIL";
                spanRef.current.style.color="white";
                spanRef.current.style.backgroundColor="red";
            }
            else
            {
                spanRef.current.innerHTML="PASS";
                spanRef.current.style.color="white";
                spanRef.current.style.backgroundColor="lightgreen";
            }
        }
        else
        {
            inputRef.current.value="";
        }

        if(inputRef.current.value==="")
        {
            spanRef.current.innerHTML="Enter Your Marks";
            spanRef.current.style.color="red";
            spanRef.current.style.backgroundColor="aliceblue";
        }
    }

    let radioGenderSpan=()=>{
        if(selectedGender==="male" || selectedGender==="female")
        {
            genderSpanRef.current.innerHTML="";
            genderSpanRef.current.style.backgroundColor="";
        }
    }

    let radioParentSpan=()=>{
        if(parentSelected==="father" || parentSelected==="mother")
        {
            parentRelationSpanRef.current.innerHTML="";
            parentRelationSpanRef.current.style.backgroundColor="";
        }
    }


    let onBlurName=()=>{
        nameSpanRef.current.innerHTML =stuNameInputRef.current.value;
        nameSpan2Ref.current.innerHTML =stuNameInputRef.current.value;
    }


    let stuDetailsOnClick=()=>{
        if(stuNameInputRef.current.value==="")
        {
            stuNameSpanRef.current.innerHTML="Please Enter Your Name";
            stuNameSpanRef.current.style.backgroundColor="aliceblue";
        }
        else
        {
            stuNameSpanRef.current.innerHTML="";
            stuNameSpanRef.current.style.backgroundColor="";
        }
        

        if(parentNameInputRef.current.value==="")
        {
            parentNameSpanRef.current.innerHTML="Please Enter Your Parent's Name";
            parentNameSpanRef.current.style.backgroundColor="aliceblue";
        }
        else 
        {
            parentNameSpanRef.current.innerHTML="";
            parentNameSpanRef.current.style.backgroundColor="";
        }


        if(selectedGender!=="male" && selectedGender!=="female")
        {
            genderSpanRef.current.innerHTML='Please Select Your Gender';
            genderSpanRef.current.style.backgroundColor="aliceblue";
        }
        else
        {
            genderSpanRef.current.innerHTML="";
            genderSpanRef.current.style.backgroundColor="";
        }


        if(parentSelected!=="father" && parentSelected!=="mother")
        {
            parentRelationSpanRef.current.innerHTML="Please choose an option";
            parentRelationSpanRef.current.style.backgroundColor="aliceblue";
        }
        else
        {
            parentRelationSpanRef.current.innerHTML="";
            parentRelationSpanRef.current.style.backgroundColor="";
        }
    }
    
    let salutations=()=>{

    if(selectedGender==="male")
        {
            salutation="MR.";
            patronymic="S/O";                     
        }
        
    if(selectedGender==="female")
        {
            salutation="Miss.";
            patronymic="D/O";
        }
            
    if(parentSelected==="father")
        {
            parentSalutation="MR.";
        }
                
    if(parentSelected==="mother")
        {
            parentSalutation="Mrs.";
        }
    }


    let onClickTot1=()=>{
            salutations();
            stuDetailsOnClick();

            let inter1={
                eng1:Number(eng1InputRef.current.value),
                sans1:Number(sans1InputRef.current.value),
                mathsA1:Number(mathsA1InputRef.current.value),
                mathsB1:Number(mathsB1InputRef.current.value),
                phy1:Number(phy1InputRef.current.value),
                chem1:Number(chem1InputRef.current.value)
            }

            let inter1Input={
                eng1:eng1InputRef.current.value,
                sans1:sans1InputRef.current.value,
                mathsA1:mathsA1InputRef.current.value,
                mathsB1:mathsB1InputRef.current.value,
                phy1:phy1InputRef.current.value,
                chem1:chem1InputRef.current.value
            }

            let name={
                stuName:stuNameInputRef.current.value,
                parentName:parentNameInputRef.current.value,
            }

            let tot1= (inter1.eng1) + (inter1.sans1) + (inter1.mathsA1) + (inter1.mathsB1) + (inter1.phy1) + (inter1.chem1); 
            let perc1=(tot1/470)*100;

            

        if((inter1Input.eng1==="" || inter1Input.sans1==="" || inter1Input.mathsA1==="" || inter1Input.mathsB1==="" || inter1Input.phy1==="" || inter1Input.chem1==="") &&
            (name.stuName!=="" && name.parentName!=="" && (selectedGender!=="male" || selectedGender!=="female") && (parentSelected!=="father" ||parentSelected!=="mother")))
        {
            totMarks1ParaRef.current.innerHTML="Please Enter Your Marks";
            totMarks1ParaRef2.current.innerHTML="";
            totMarks1FieldsetRef.current.style.backgroundColor="lightpink";
        }
        else if(
            (inter1Input.eng1==="" || inter1Input.sans1==="" || inter1Input.mathsA1==="" || inter1Input.mathsB1==="" || inter1Input.phy1==="" || inter1Input.chem1==="") 
             && 
        (name.stuName==="" || name.parentName==="" || (selectedGender!=="male" && selectedGender!=="female") || (parentSelected!=="father" &&parentSelected!=="mother")))
        {
            totMarks1ParaRef.current.innerHTML="Please Fill Student Details and Marks";
            totMarks1ParaRef2.current.innerHTML="";
            totMarks1FieldsetRef.current.style.backgroundColor="lightPink";
        }
        else if(
            (inter1Input.eng1!=="" && inter1Input.sans1!=="" && inter1Input.mathsA1!=="" && inter1Input.mathsB1!=="" && inter1Input.phy1!=="" && inter1Input.chem1!=="")
            &&
            (name.stuName==="" || name.parentName==="" || (selectedGender!=="male" && selectedGender!=="female") || (parentSelected!=="father" &&parentSelected!=="mother")))
        {
            totMarks1ParaRef.current.innerHTML="Please Fill The Student Details";
            totMarks1ParaRef2.current.innerHTML="";
            totMarks1FieldsetRef.current.style.backgroundColor="lightpink";
        }

            else if(inter1Input.eng1<pass100 || inter1Input.sans1<pass100 || inter1Input.mathsA1<pass75 || inter1Input.mathsB1<pass75 || inter1Input.phy1<pass60 || inter1Input.chem1<pass60)
            {
                totMarks1ParaRef.current.innerHTML=`${name.stuName} Promoted`;
                totMarks1ParaRef2.current.innerHTML="";
                totMarks1FieldsetRef.current.style.backgroundColor="red";
            }
            else
            {
                totMarks1ParaRef.current.innerHTML=`${tot1}/470 - ${perc1.toFixed(2)}%`;
                totMarks1ParaRef.current.style.fontSize="1.5rem";
                totMarks1ParaRef.current.style.backgroundColor="white";
                totMarks1ParaRef.current.style.borderRadius="30px";
                totMarks1ParaRef.current.style.color="darkblue";
                totMarks1ParaRef.current.style.textAlign="center";
                totMarks1ParaRef.current.style.textAlign="center";
                totMarks1ParaRef2.current.innerHTML=`${salutation} ${name.stuName} ${patronymic} ${parentSalutation} ${name.parentName} Has Successfully Passed Intermediate I Year.`;
                totMarks1FieldsetRef.current.style.backgroundColor="lightgreen";
            }

    }
                
    let onClickTot2=()=>{

        salutations();
        stuDetailsOnClick();


        let inter2={
            eng2:Number(eng2InputRef.current.value),
            sans2:Number(sans2InputRef.current.value),
            mathsA2:Number(mathsA2InputRef.current.value),
            mathsB2:Number(mathsB2InputRef.current.value),
            phy2:Number(phy2InputRef.current.value),
            chem2:Number(chem2InputRef.current.value),
            phyPrac:Number(phyPracInputRef.current.value),
            chemPrac:Number(chemPracInputRef.current.value)
        }

        let inter2Input={
            eng2:eng2InputRef.current.value,
            sans2:sans2InputRef.current.value,
            mathsA2:mathsA2InputRef.current.value,
            mathsB2:mathsB2InputRef.current.value,
            phy2:phy2InputRef.current.value,
            chem2:chem2InputRef.current.value,
            phyPrac:phyPracInputRef.current.value,
            chemPrac:chemPracInputRef.current.value
        }

        let name={
            stuName:stuNameInputRef.current.value,
            parentName:parentNameInputRef.current.value,
        }

        let tot2= (inter2.eng2) + (inter2.sans2) + (inter2.mathsA2) + (inter2.mathsB2) + (inter2.phy2) + (inter2.chem2) + (inter2.phyPrac) + (inter2.chemPrac); 

        let perc2=(tot2/530)*100;

            if((inter2Input.eng2==="" || inter2Input.sans2==="" || inter2Input.mathsA2==="" || inter2Input.mathsB2==="" || inter2Input.phy2==="" || inter2Input.chem2==="" || inter2Input.phyPrac===""|| inter2Input.chemPrac==="") &&
                (name.stuName!=="" && name.parentName!=="" && (selectedGender!=="male" || selectedGender!=="female") && (parentSelected!=="father" ||parentSelected!=="mother")))
            {
                totMarks2ParaRef.current.innerHTML="Please Enter Your Marks";
                totMarks2ParaRef2.current.innerHTML="";
                totMarks2FieldsetRef.current.style.backgroundColor="lightpink";
            }
            else if(
                (inter2Input.eng2==="" || inter2Input.sans2==="" || inter2Input.mathsA2==="" || inter2Input.mathsB2==="" || inter2Input.phy2==="" || inter2Input.chem2==="" || inter2Input.phyPrac==="" || inter2Input.chemPrac==="") 
                 && 
            (name.stuName==="" || name.parentName==="" || (selectedGender!=="male" && selectedGender!=="female") || (parentSelected!=="father" &&parentSelected!=="mother")))
            {
                totMarks2ParaRef.current.innerHTML="Please Fill Student Details and Marks";
                totMarks2ParaRef2.current.innerHTML="";
                totMarks2FieldsetRef.current.style.backgroundColor="lightPink";
            }
            else if(
                (inter2Input.eng2!=="" && inter2Input.sans2!=="" && inter2Input.mathsA2!=="" && inter2Input.mathsB2!=="" && inter2Input.phy2!=="" && inter2Input.chem2!=="" && inter2Input.phyPrac!=="" && inter2Input.chemPrac!=="")
                &&
                (name.stuName==="" || name.parentName==="" || (selectedGender!=="male" && selectedGender!=="female") || (parentSelected!=="father" &&parentSelected!=="mother")))
            {
                totMarks2ParaRef.current.innerHTML="Please Fill The Student Details";
                totMarks2ParaRef2.current.innerHTML="";
                totMarks2FieldsetRef.current.style.backgroundColor="lightpink";
            }

            else if(inter2Input.eng2<pass100 || inter2Input.sans2<pass100 || inter2Input.mathsA2<pass75 || inter2Input.mathsB2<pass75 || inter2Input.phy2<pass60 || inter2Input.chem2<pass60 || inter2Input.phyPrac<pass30 || inter2Input.chemPrac<pass30)
            {
                totMarks2ParaRef.current.innerHTML=`${name.stuName} Failed`;
                totMarks2ParaRef2.current.innerHTML="";
                totMarks2FieldsetRef.current.style.backgroundColor="red";
            }
            else
            {
                totMarks2ParaRef.current.innerHTML=`${tot2}/530 - ${perc2.toFixed(2)}%`;
                totMarks2ParaRef.current.style.fontSize="1.5rem";
                totMarks2ParaRef.current.style.backgroundColor="white";
                totMarks2ParaRef.current.style.borderRadius="30px";
                totMarks2ParaRef.current.style.color="darkblue";
                totMarks2ParaRef.current.style.textAlign="center";
                totMarks2ParaRef2.current.innerHTML=`${salutation} ${name.stuName} ${patronymic} ${parentSalutation} ${name.parentName} Has Successfully Passed Intermediate II Year.`;
                totMarks2FieldsetRef.current.style.backgroundColor="lightgreen";
            }
    }

    let onClickResult12=()=>{

            salutations();


            let inter1Input={
                eng1:eng1InputRef.current.value,
                sans1:sans1InputRef.current.value,
                mathsA1:mathsA1InputRef.current.value,
                mathsB1:mathsB1InputRef.current.value,
                phy1:phy1InputRef.current.value,
                chem1:chem1InputRef.current.value,
            }
             
            let inter2Input={
                eng2:eng2InputRef.current.value,
                sans2:sans2InputRef.current.value,
                mathsA2:mathsA2InputRef.current.value,
                mathsB2:mathsB2InputRef.current.value,
                phy2:phy2InputRef.current.value,
                chem2:chem2InputRef.current.value,
                phyPrac:phyPracInputRef.current.value,
                chemPrac:chemPracInputRef.current.value,
            }


                
                let inter1={
                    eng1:Number(eng1InputRef.current.value),
                    sans1: Number(sans1InputRef.current.value),
                    mathsA1: Number(mathsA1InputRef.current.value),
                    mathsB1: Number(mathsB1InputRef.current.value),
                    phy1: Number(phy1InputRef.current.value),
                    chem1: Number(chem1InputRef.current.value),
                }
                 
                let inter2={
                    eng2: Number(eng2InputRef.current.value),
                    sans2: Number(sans2InputRef.current.value),
                    mathsA2: Number(mathsA2InputRef.current.value),
                    mathsB2: Number(mathsB2InputRef.current.value),
                    phy2: Number(phy2InputRef.current.value),
                    chem2: Number(chem2InputRef.current.value),
                    phyPrac:Number(phyPracInputRef.current.value),
                    chemPrac:Number(chemPracInputRef.current.value),
                }
                let name={
                    stuName:stuNameInputRef.current.value,
                    parentName: parentNameInputRef.current.value,
                }

            
            let tot12= (inter1.eng1) + (inter1.sans1) + (inter1.mathsA1) + (inter1.mathsB1) + (inter1.phy1) + (inter1.chem1) + (inter2.eng2) + (inter2.sans2) +(inter2.mathsA2) + (inter2.mathsB2) + (inter2.phy2) + (inter2.chem2) + (inter2.phyPrac) + (inter2.chem2);
            
            let perc12= (tot12/1000)*100;


        if(
            (inter1Input.eng1==="" || inter2Input.eng2==="" || inter1Input.sans1==="" || inter2Input.sans2==="" || inter1Input.mathsA1==="" || inter1Input.mathsB1==="" || inter2Input.mathsA2==="" || inter2Input.mathsB2==="" || inter1Input.phy1==="" || inter2Input.phy2==="" || inter1Input.chem1==="" || inter2Input.chem2==="" || inter2Input.phyPrac==="" ||inter2Input.chemPrac==="")  
            &&  
           (name.stuName==="" || name.parentName==="" || (selectedGender!=="male" && selectedGender!=="female") || (parentSelected!=="father" && parentSelected!=="mother")))
        {
            result12ParaRef.current.innerHTML="Please Fill Student Details and Marks";
            result12ParaRef2.current.innerHTML="";
            result12FieldsetRef.current.style.backgroundColor="lightpink";
        }

        else if(
            (inter1Input.eng1!=="" && inter2Input.eng2!=="" && inter1Input.sans1!=="" && inter2Input.sans2!=="" && inter1Input.mathsA1!=="" && inter1Input.mathsB1!=="" && inter2Input.mathsA2!=="" && inter2Input.mathsB2!=="" && inter1Input.phy1!=="" && inter2Input.phy2!=="" && inter1Input.chem1!=="" && inter2Input.chem2!=="" && inter2Input.phyPrac!=="" &&inter2Input.chemPrac!=="")  
            &&  
           (name.stuName==="" || name.parentName==="" || (selectedGender!=="male" && selectedGender!=="female") || (parentSelected!=="father" && parentSelected!=="mother")))
        {
            result12ParaRef.current.innerHTML="Please Enter Student Details";
            result12ParaRef2.current.innerHTML="";
            result12FieldsetRef.current.style.backgroundColor="lightpink";
        }

        else if(
            (inter1Input.eng1==="" || inter2Input.eng2==="" || inter1Input.sans1==="" || inter2Input.sans2==="" || inter1Input.mathsA1==="" || inter1Input.mathsB1==="" || inter2Input.mathsA2==="" || inter2Input.mathsB2==="" || inter1Input.phy1==="" || inter2Input.phy2==="" || inter1Input.chem1==="" || inter2Input.chem2==="" || inter2Input.phyPrac==="" ||inter2Input.chemPrac==="")  
            &&  
           (name.stuName!=="" && name.parentName!=="" && (selectedGender==="male" || selectedGender==="female") && (parentSelected==="father" || parentSelected==="mother")))
        {
            result12ParaRef.current.innerHTML="Please Enter Your Marks";
            result12ParaRef2.current.innerHTML="";
            result12FieldsetRef.current.style.backgroundColor="lightpink";
        }

        else if(inter1Input.eng1<pass100 || inter2Input.eng2<pass100 || inter1Input.sans1<pass100 || inter2Input.sans2<pass100 || inter1Input.mathsA1<pass75 || inter1Input.mathsB1<pass75 || inter2Input.mathsA2<pass75 || inter2Input.mathsB2<pass75 || inter1Input.phy1<pass60 || inter2Input.phy2<pass60 || inter1Input.chem1<pass60 |inter2Input.chem2<pass60 || inter2Input.phyPrac<pass30 || inter2Input.chemPrac<pass30)
        {
            result12ParaRef.current.innerHTML=`${name.stuName} Failed`;
            result12ParaRef.current.style.color="white";
            result12FieldsetRef.current.style.backgroundColor="red";
        }
        else
        {
            result12ParaRef.current.innerHTML=`${tot12}/1000 - ${perc12.toFixed(2)}%`;
            result12ParaRef.current.style.backgroundColor="white";
            result12ParaRef.current.style.fontSize="2.4rem";
            result12ParaRef.current.style.color="darkgreen";
            result12ParaRef2.current.innerHTML=`${salutation} ${name.stuName} ${patronymic} ${parentSalutation} ${name.parentName} Has Successfully Passed Intermediate.`;
            result12ParaRef2.current.style.fontSize="1.8rem";
            result12ParaRef2.current.style.color="white";
            result12FieldsetRef.current.style.backgroundColor="lightgreen";
        }

    }



  return (
    <div className='interFormDiv'>

        <TopNavigation/>


      <form className='stuInterForm'>

        <div className='stuDetailsDiv'>
            <fieldset>
                <legend>Student Details</legend>


                <div className='stuDetailsFlex'>


    <div className='stuDetailsFlex1'>
            <div className='stuParentNameDiv'>
                <div>
            <label className='labelHeading'>Student Name</label>
            <input type='text' placeholder='Enter Your Full Name' ref={stuNameInputRef}
            onChange={()=>{
                nameValidation(stuNameInputRef,stuNameSpanRef);
            }}
            onBlur={()=>{
                onBlurName(); 
                stuDetailsSpanRef(stuNameInputRef,stuNameSpanRef);  
            }}
            ></input>
            </div>

            <div>
            <span ref={stuNameSpanRef}></span>
            </div>
            </div>


            <div className='stuParentNameDiv'>
                <div>
            <label className='labelHeading'>Parent Name</label>
            <input type='text' ref={parentNameInputRef}
            onChange={()=>{
                nameValidation(parentNameInputRef,parentNameSpanRef);
            }}
            onBlur={()=>{
                stuDetailsSpanRef(parentNameInputRef,parentNameSpanRef);
            }}
            ></input>
            </div>

            <div>
            <span ref={parentNameSpanRef}></span>
            </div>
            </div>

    </div>


    <div className='stuDetailsFlex2'>
            <div className='genderButtonsDiv'>
                <div>
            <label className='labelHeading'>Select Gender</label>

            <input type='radio' name='gender' ref={maleRadioInputRef}
            onChange={()=>{
                if(maleRadioInputRef.current.checked === true)
                {
                    selectedGender="male";
                }

                radioGenderSpan();
            }}
            ></input>
            <label>MALE</label>

            <input type='radio' name='gender' ref={femaleRadioInputRef}
            onChange={()=>{
                if(femaleRadioInputRef.current.checked === true)
                {
                    selectedGender="female";
                }

                radioGenderSpan();
            }}
            ></input>
            <label>FEMALE</label>
            </div>

            <div>
            <span ref={genderSpanRef}></span>
            </div>

        </div>



            <div className='genderButtonsDiv'>
                <div>
                <label className='hidden'></label>
            <input type='radio' name='relation'
            
            onChange={(eventObj)=>{
                if(eventObj.target.checked === true)
                {
                    parentSelected="father";
                }
                radioParentSpan();
            }}
            ></input>
            <label>FATHER</label>
            <input type='radio' name='relation'
            onChange={(eventObj)=>{
                if(eventObj.target.checked === true)
                {
                    parentSelected="mother";
                }
                radioParentSpan();
            }}
            ></input>
            <label>MOTHER</label>
            </div>

            <div>
            <span ref={parentRelationSpanRef}></span>
            </div>
        </div>
    </div>

        </div>
            </fieldset>
        </div>

        <div className='subDiv'>
            <fieldset>
                <legend>Subjects</legend>
            <div className='inputHeading'>
                <input value='PART-I' disabled></input>
            </div>
            <div>
                <input value='ENGLISH' disabled></input>
            </div>
            <div className='inputHeading'>
                <input value='PART-II' disabled></input>
            </div>
            <div>
                <input value='SANSKRIT' disabled></input>
            </div>
            <div className='inputHeading'>
                <input value='PART-III' disabled></input>
            </div>
            <div>
                <input value='MATHEMATICS A' disabled></input>
            </div>
            <div>
                <input value='MATHEMATICS B' disabled></input>
            </div>
            <div>
                <input value='PHYSICS' disabled></input>
            </div>
            <div>
                <input value='CHEMISTRY' disabled></input>
            </div>
            <div>
                <input value='PHYSICS PRACTICAL' disabled></input>
            </div>
            <div>
                <input value='CHEMISTRY PRACTICAL' disabled></input>
            </div>

            <div className='hidden'>
                <fieldset>
                    <legend><button type='button'>TOTAL</button></legend>
                    <span></span>
                </fieldset>
            </div>
            </fieldset>
        </div>

        <div className='marksDiv'>
            <fieldset>
                <legend>Marks</legend>
            <div className='inputHeading'>
                <input value='MARKS' disabled></input>
                <input value='Max.MARKS' disabled></input>
            </div>
            <div>
                <input value='100' disabled></input>
                <input value='35' disabled></input>
            </div>
            <div className='hidden'>
                <input value='100' disabled></input>
                <input value='100' disabled></input>
            </div>
            <div>
                <input value='100' disabled></input>
                <input value='35' disabled></input>
            </div>
            <div className='hidden'>
                <input value='100' disabled></input>
                <input value='100' disabled></input>
            </div>
            <div>
                <input value='75' disabled></input>
                <input value='26.25' disabled></input>
            </div>
            <div>
                <input value='75' disabled></input>
                <input value='26.25' disabled></input>
            </div>
            <div>
                <input value='60' disabled></input>
                <input value='21' disabled></input>
            </div>
            <div>
                <input value='60' disabled></input>
                <input value='21' disabled></input>
            </div>
            <div>
                <input value='30' disabled></input>
                <input value='10.5' disabled></input>
            </div>
            <div>
                <input value='30' disabled></input>
                <input value='10.5' disabled></input>
            </div>

            <div className='hidden'>
                <fieldset>
                    <legend><button type='button'>TOTAL</button></legend>
                    <span></span>
                </fieldset>
            </div>
            </fieldset>
        </div>

        <div className='stuMarks1Div'>
            <fieldset>
                <legend> <span className='nameSpan' ref={nameSpanRef}> Student </span>'s I Year Marks</legend>
            <div className='hidden'>
                <input type='number'></input>
            </div>
            <div>
                <input type='number' ref={eng1InputRef}
                onBlur={()=>{
                    onBlurSpan100(eng1InputRef,eng1SpanRef);
                }}
                ></input>
                <span ref={eng1SpanRef}></span>
            </div>
            <div className='hidden'>
                <input type='number'></input>
            </div>
            <div>
                <input type='number' ref={sans1InputRef}
                onBlur={()=>{
                    onBlurSpan100(sans1InputRef,sans1SpanRef);
                }}
                ></input>
                <span ref={sans1SpanRef}></span>
            </div>
            <div className='hidden'>
                <input type='number'></input>
            </div>
            <div>
                <input type='number' ref={mathsA1InputRef}
                onBlur={()=>{
                    onBlurSpan75(mathsA1InputRef,mathsA1SpanRef);
                }}
                ></input>
                <span ref={mathsA1SpanRef}></span>
            </div>
            <div>
                <input type='number' ref={mathsB1InputRef}
                onBlur={()=>{
                    onBlurSpan75(mathsB1InputRef,mathsB1SpanRef);
                }}
                ></input>
                <span ref={mathsB1SpanRef}></span>
            </div>
            <div>
                <input type='number' ref={phy1InputRef}
                onBlur={()=>{
                    onBlurSpan60(phy1InputRef,phy1SpanRef);
                }}
                ></input>
                <span ref={phy1SpanRef}></span>
            </div>
            <div>
                <input type='number' ref={chem1InputRef}
                onBlur={()=>{
                    onBlurSpan60(chem1InputRef,chem1SpanRef);
                }}
                ></input>   
                <span ref={chem1SpanRef}></span>
            </div>
            <div className='hidden'>
                <input type='number'></input>
            </div>
            <div className='hidden'>
                <input type='number'></input>
            </div>

            <div>
                <fieldset  ref={totMarks1FieldsetRef}>
                    <legend><button type='button'
                    onClick={()=>{
                        onClickTot1();
                    }}
                    >TOTAL</button></legend>
                    <p ref={totMarks1ParaRef}></p>
                    <p ref={totMarks1ParaRef2}></p>
                </fieldset>
            </div>
            </fieldset>
        </div>

        <div className='stuMarks2Div'>
            <fieldset>
                <legend> <span className='nameSpan' ref={nameSpan2Ref}>Student</span>'s II Year Marks</legend>
            <div className='hidden'>
                <input type='number'></input>
            </div>
            <div>
                <input type='number' ref={eng2InputRef}
                onBlur={()=>{
                    onBlurSpan100(eng2InputRef,eng2SpanRef);
                }}
                ></input>
                <span ref={eng2SpanRef}></span>
            </div>
            <div className='hidden'>
                <input type='number'></input>
            </div>
            <div>
                <input type='number' ref={sans2InputRef}
                onBlur={()=>{
                    onBlurSpan100(sans2InputRef,sans2SpanRef);
                }}
                ></input>
                <span ref={sans2SpanRef}></span>
            </div>
            <div className='hidden'>
                <input type='number'></input>
            </div>
            <div>
                <input type='number' ref={mathsA2InputRef}
                onBlur={()=>{
                    onBlurSpan75(mathsA2InputRef,mathsA2SpanRef);
                }}
                ></input>
                <span ref={mathsA2SpanRef}></span>
            </div>
            <div>
                <input type='number' ref={mathsB2InputRef}
                onBlur={()=>{
                    onBlurSpan75(mathsB2InputRef,mathsB2SpanRef);
                }}
                ></input>
                <span ref={mathsB2SpanRef}></span>
            </div>
            <div>
                <input type='number' ref={phy2InputRef}
                onBlur={()=>{
                    onBlurSpan60(phy2InputRef,phy2SpanRef);
                }}
                ></input>
                <span ref={phy2SpanRef}></span>
            </div>
            <div>
                <input type='number' ref={chem2InputRef}
                onBlur={()=>{
                    onBlurSpan60(chem2InputRef,chem2SpanRef);
                }}
                ></input>
                <span ref={chem2SpanRef}></span>
            </div>
            <div>
                <input type='number' ref={phyPracInputRef}
                onBlur={()=>{
                    onBlurSpan30(phyPracInputRef,phyPracSpanRef);
                }}
                ></input>
                <span ref={phyPracSpanRef}></span>
            </div>
            <div>
                <input type='number' ref={chemPracInputRef}
                onBlur={()=>{
                    onBlurSpan30(chemPracInputRef,chemPracSpanRef);
                }}
                ></input>
                <span ref={chemPracSpanRef}></span>
            </div>

            <div>
                <fieldset ref={totMarks2FieldsetRef}>
                <legend><button type='button'
                onClick={()=>{
                    onClickTot2();
                }}
                >TOTAL</button></legend>
                    <p ref={totMarks2ParaRef}></p>
                    <p ref={totMarks2ParaRef2}></p>
                </fieldset>
            </div>
            </fieldset>
        </div>

        <div className='resultDiv'>
            <fieldset ref={result12FieldsetRef}>
                <legend><button type='button'
                onClick={()=>{
                    onClickResult12();
                    stuDetailsOnClick();
                }}
                >RESULT</button></legend>
                <p ref={result12ParaRef}></p>
                <p ref={result12ParaRef2}></p>
            </fieldset>
        </div>

      </form>
    </div>
  )
}

export default InterForm
