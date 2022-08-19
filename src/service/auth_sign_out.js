import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth).then(() => {
    //Sign_out successful
}).catch((error) => {
    // An error happend
    console.log(error);
})