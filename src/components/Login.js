
import React, { useState } from "react";

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [passwordR, setPasswordR] = useState ("");
    const [accept, setAccept] = useState(false);

    const [flag, setFlag] = useState (true);

    function submit (e) {
        e.preventDefault ();
        setAccept (true);
    }

    return (
        <>
        <div className="container-login">
            <div className="login-empty"> 
                
                    <h1> WELCOME</h1>

                        <p > Fill Out the form carefully for registration</p>
                             <button  type="submit" className="signup"> SIGN-IN</button>
                       
                    </div>
            
            <div className="form-login ">
                <div className="body-login">
                    <div className="title-content">
                        <h2>Create an account</h2>
              </div>
                <form className="login" action="">

                    <div >
                       <i className="fas fa-user"> </i>
                        <input  className="space" type="text" placeholder=" Name" value={name}
                            onChange={(e) => setName(e.target.value)} />
                        {name===" " && accept && <h3 id="error">  !</h3>}
                        </div>
                        <div >
                
                           
                        <i className="fas fa-envelope"></i>
                           
                            <input className="space" type="email" placeholder=" email"  value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            
                        {email===" " && accept && <h3 id="error">  !</h3>}

                    </div>
                
                        <div >
                         <i className="fas fa-lock"></i>
                        <input  type="password" placeholder=" password"  value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        { password.length < 8 && accept && <h3 id="error1"> !</h3>}

                </div>
                        <div>
                         <i className="fas fa-lock"></i>
                        <input   type="password" placeholder="Confirm password"  value={passwordR}
                            onChange={(e) => setPasswordR(e.target.value)} />
                        { passwordR !== password &&<h3 id="error1"> ! </h3>}
            </div>
                    <button   className="click"> SIGN UP</button>
                   
                    </form>
                    
                </div>
                    
          
            </div>
     </ div >
     </>
    );
}