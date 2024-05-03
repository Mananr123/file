

import React, { useState } from "react"
import axios from "axios";



export default function Form() {


    const [name, setName] = useState ("");
     const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
   
    const [accept, setAccept] = useState (false);
    const [flag , setFlag] = useState (true);
    console.log(flag);
    console.log(name);
    console.log(password);
    
     async function submit(e) {
        let flag = true;
        // e.preventDefault();
        setAccept(true);
         



        //  const axios = require('axios');
        //  const postData = {
        //      Name: 'name',
        //      email: 'email',
        //      password: 'password'
        //  };
        //  const config = {
        //      headrs: {
        //          'Content-Type': 'application/json'
        //      }
        //  };
        //  const url = 'https://example.com/api/endpoind';
        //  axios.post("https://clinic-server-4pyg.vercel.app/api/users/register", postData, config)
        //      .then(response => {
        //          console.log('Response:', response.data);
        //      })
        //      .catch(error => {
        //          console.log('Error:', error);
        //      });
    }
    return (
        

        <div className='container'>
            <div className="overlay-container">
                <div className="overlay">
                    
                        <h2>Welcome Back ! </h2>
                       
                        <p >
                            This is medicare a website for loving learning and knowing about you diagnosis
                        </p>
                        <button > SIGN-IN</button>
                    </div>
                </div>
           
     
        <div className="signin-signup">
                    <div className="form-sign">
                    
                    <form   onSubmit={submit}>
                    <h2>Login To Your Account</h2>
                    
                   <div  >
                     <a href="https://www.twitter.com">
                                <i id="link" className="fa-brands fa-x-twitter" > </i>
                                
                            </a>
                       
                            <a href="https://www.facebook.com">
                                <i id="link" className="fa-brands fa-facebook " > </i>
                            </a>
                      
                            <a href="https://www.google.com ">
                                <i id="link" className ="fa-brands fa-google">  </i>
                            </a>

                   </div>

                        <span> or use your email for registration</span>
                          
                    {/* <div>
                      <i className="fas fa-user"> </i>
                        <input type="text" placeholder="name" value={name}
                         onChange={(e) => setName(e.target.value)} />
                       {name===''&& accept && <h3 className="error"> ! </h3>}
                </div>  */}
                        
                        <div >
                        <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="email"  value={email}
                            onChange={(e) => setEmail(e.target.value)} /> 
                        { email ==='' && accept && <h3 className="error"> ! </h3>}
                    </div>
                    <div>
                         <i className="fas fa-lock"></i>
                        <input  type="password" placeholder="password"  value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        { password.length < 8 && accept &&<h3 className="error"> ! </h3>}
                    </div>
                 <a className="forgot" href=" Email">Forgot password</a>
         
                        <button  type="submit" > SIGN-UP</button>
                    </form>
            </div>
            
            
                
   </div>
           
      </div>
   
    )
}