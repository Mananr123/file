import React from "react";



export default function Pass() {

    return(

            <div className="pass-container"> 
                
                <div className="pass-form">
                    <div className="pass-body">
               <h4>Reset your password .</h4>
                    <form action=""> 
                        
                        
                         <i class="fas fa-lock"></i>
                        <input type="password" placeholder="  Now Password"   />
        
                         <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Confirm password" />
                    
                        <button type="submit" className="sub"> Submit</button>
                        </form>
                        </div>
                </div>
            
            
            <div className="pass-empty">
                <div className=" ground">
                    <h3>Reset your password .</h3>

                </div>
            </div>
            </div>
    );
}