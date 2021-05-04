import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import Title from "./SHUAKKI.png";
import Logo from "./logo.png";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";


function Login() {
const [state,dispatch] = useStateValue();

const signIn = () => {
    console.log("Signing In...");
    auth.signInWithPopup(provider)
    .then((result)=>{
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        });
    })
    .catch((error)=>{console.log(error);})
}

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src={Title}alt=""/>
                <img className="logo"
                    src={Logo}alt=""/>
                
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In 
            </Button>

        </div>
    );
}

export default Login;
