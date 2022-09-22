import React, { useState, useEffect } from "react";
import "./contact.css";
import Back from "../common/Back";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // const callContact = async () =>{
  //    try{
  //         const res = await fetch('/getdata', {
  //             method: "GET",
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //              })
  //             const data = await res.json();
  //             console.log(data)
  //             setuserdata({...userdata, name:data.name, email:data.email, mobile:data.mobile})

  //             if(!res.status === 200){
  //                 const error = new Error(res.error)
  //                 throw error;
  //             }
  //       }
  //       catch(err){
  //             console.log(err)
  //             history.push('/login')
  //             }
  // }
  //  useEffect(() => {
  //    callContact()
  //  }, [])

  // storing data in contact us form

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuserdata({ ...userdata, [name]: value });
  };
  // Submitting the new data to backend

   const SubmitNewData = async (e)=>{
       e.preventDefault()
      const {name, email, mobile, message} = userdata
      const res= await fetch('/contact', {
          method:"POST",
          headers: { "Content-Type" : "application/json"},
          body: JSON.stringify({ name , email, mobile, message })
      })

      const data = await res.json()
      if(!data ){
          console.log('Message not sent');
      }
      else{
          alert('Message Delivered Successfully !!!')
          setuserdata({...userdata, message:''})
      }
   }

  return (
    <div class="background">
      <Back title="Feedback"/>
      <div class="container">
        <div class="screen">
          <div class="screen-header">
            <div class="screen-header-left">
              <div class="screen-header-button close"></div>
              <div class="screen-header-button maximize"></div>
              <div class="screen-header-button minimize"></div>
            </div>
            <div class="screen-header-right">
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
            </div>
          </div>
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <span style={{color:"#1eb2a6", fontSize:"1rem", paddingTop:"9%"}}>We value your feedback an we're always open to suggestions!</span>
              <div class="app-contact">CONTACT INFO : +91 7011-301-240</div>
            </div>
            <div class="screen-body-item">
            <form className='mt-3' method='POST'>
              <div class="app-form">
                <div class="app-form-group">
                  <input
                    class="app-form-control"
                    placeholder="NAME"
                    value={userdata.name}
                    name='name' 
                    onChange={handleInputs}
                  />
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="EMAIL" value={userdata.email} name='email'/>
                </div>
                <div class="app-form-group message">
                  <input class="app-form-control" placeholder="MESSAGE" value={userdata.message} onChange={handleInputs} name='message'/>
                </div>
                <div class="app-form-group buttons">
                  <button class="app-form-button" type="submit" onClick={SubmitNewData}>SEND</button>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
