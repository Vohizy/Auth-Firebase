import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SingInWithFacebook } from "../../service/Auth_Facebook_signIn_popup";
import { SingInWithGithub } from "../../service/auth_Github_signIn_popup";
import { SingInWithGoogle } from "../../service/Auth_Google_signIn_popup";
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "../firebase-config";
import { Btn } from "./Button";
import '../../App.css'
export const Login : React.FC<{}> = () => {
    const [email, setEmail] = useState<string>("");
    const [user, laod] = useAuthState(auth)
    const navigate= useNavigate()
     useEffect(() => {
        if (laod) {
            return;
        }
        if (user) {
            navigate("/Home")
        }
     }, [user, laod])
    return (
        <>
            <Btn ClassName="google" login={SingInWithGoogle} value="Sing in With Google" />
            <Btn ClassName="facebook" login={SingInWithFacebook} value="Sing in With Facebook" />
            <Btn ClassName="github" login={SingInWithGithub} value="Sing in with Github" />
        </>
    )
}