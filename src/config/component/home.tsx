import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";
import { auth,db } from "../firebase-config"
import { query, collection, getDoc, where } from "firebase/firestore"
import { SINGOut } from "./SignOut";

export const Home: React.Fc<any> = () => {
    const [user, load] = useAuthState(auth);
    const [name, setName] = useState<string>("")
    const navigate = useNavigate();

    const screen = async () => {
        try {
            const use = query(collection(db, "user"), where("uid", "==", user?.uid));
            const doc = await getDoc(use);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.log(err);
            
        }
    };
    useEffect(() => {
        if (load) {
            return;
        }
        if (!user) {
            return navigate("/")
        }
        screen();
    }, [user, load]);
    return (
        <>
            <h1>Welcome</h1>
            <SINGOut />
        </>
    )
}