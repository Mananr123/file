import React from "react";

export default function Email() {
    return (
        
        <div className="container-email">
            <div className="form-container">
                <div className=" container-body">
                <form action="" className="" method="">
                    
                    <h3>Forgot Your Password ?</h3>
                    <p> Please enter your email address. We will send you an email to reset your password .</p>

                  
                  
                    <div id="email">
                        <i class="fas fa-envelope"></i>
                    <input type=" email" placeholder=" &nbsp;  Email address" ></input>
                    </div>

                    <button className="submit" type="submit"> Reset Password </button>
                </form>
              </div>
                <div  className="page-empty">
                    <div className="page">
                        <div className="pages2" >
                            <p> You may need to verify your identity through<br/>
                                email or security questions in order
                                <br/>to create a new password.</p>

                        </div>

                    </div>
</div>
            </div>

         </div>
    );
}