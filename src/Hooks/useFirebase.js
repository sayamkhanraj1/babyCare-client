import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../LogIn/firebase/firebase.init";

initializeAuthentication()

const useFirebase = () =>{
         const [user, setUser] = useState ({});
         const [isLoading, setIsloading] = useState(true);
         
         const auth = getAuth();

         const singInIUseingGoogle = () =>{
                setIsloading(true)
                  const googleProvider = new GoogleAuthProvider();
                  return signInWithPopup(auth, googleProvider)
                  
                  .finally(() => setIsloading(false));
         };

         useEffect(()=>{
                const unsubscribed =  onAuthStateChanged(auth, user =>{
                           if(user){
                                    setUser(user);
                           }
                           else{
                                    setUser({});
                           };
                           setIsloading(false);
                  });
                  return () => unsubscribed;
         }, [])

         const logOut = () =>{
                setIsloading(true)
                  signOut(auth)
                  .then(() =>{ })
                  .finally(() => setIsloading(false))
                  ;
         }

         return {
                  user,
                  isLoading,
                  singInIUseingGoogle,
                  logOut
         }
}

export default useFirebase;