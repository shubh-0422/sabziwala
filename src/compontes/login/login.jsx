import React from "react";
import loginImg from "./../../assets/image/download.jpeg" ;
import {signInWithGoogle} from './../../firebase/firebase.utils'
 

export class Login extends React.Component{
     constructor(props){
         super(props);

     }
     render(){
         return (
             <div className="base-container" ref={this.props.containerRef}>
                 <div className="header">
                    Login
                 </div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} /> 
                    </div>
                    <div className="form">
                    <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                    </div> 
                </div>
                <div className="footer">
                    <button className="btn" type="button">login</button>
                    <button className="btn" onClick={signInWithGoogle} >sign in with google</button>
                </div>
             </div>
         )}
     }
 