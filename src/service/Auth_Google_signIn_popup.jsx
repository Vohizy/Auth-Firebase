import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../config/firebase-config';

//const auth = getAuth();
const provider = new GoogleAuthProvider();
export const SingInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((res) => {
            //gives you a Google Access Token. you can use it to accss the Google API
            const credential = GoogleAuthProvider.credentialFromResult(res);
            const token = credential.accessToken;

            //The signed-in user info
            const user = res.user;

        }).catch((error) => {
            // Error here
            const errorCode = error.code;
            const errorMessage = error.message;

            // the email of the user's account used
            const email = error.customData.email
            console.log(errorCode, errorMessage, email);

            //the AuthCredential type that was used 
            const credential = GoogleAuthProvider.credentialFromError(error)
        })
}