import { signOut } from "firebase/auth";
import React from "react";
import { firebaseConfig } from "../firebase-config";

export const SINGOut = () => {
  return (
    <>
      <button onClick={() => signOut(auth)}>Sing out</button>
    </>
  );
};
