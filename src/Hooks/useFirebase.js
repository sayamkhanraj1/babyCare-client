import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../LogIn/firebase/firebase.init";

initializeAuthentication()

const useFirebase = () =>{
         const [user, setUser] = useState ({});
         const [isLoading, setIsloading] = useState(true);
         const [admin, setAdmin] = useState(false);
         
         const auth = getAuth();

         const singInIUseingGoogle = () =>{
                setIsloading(true)
                  const googleProvider = new GoogleAuthProvider();
                  return signInWithPopup(auth, googleProvider)
                  .then(result => {
                         const user = result.user;
                         saveUser(user.email, user.displayName)
                  }).catch(error => {

                  })
                  .finally(() => setIsloading(false));
         };

         const saveUser = (email, displayName) =>{
              const users = {email, displayName}
              fetch('https://calm-mountain-67432.herokuapp.com/users', {
                      method: 'PUT',
                      headers: { "content-type": "application/json" },
                      body: JSON.stringify(users)
              })
              .then()
      }

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
         }, [auth]);

         const logOut = () =>{
                setIsloading(true)
                  signOut(auth)
                  .then(() =>{ })
                  .finally(() => setIsloading(false))
                  ;
         }

         useEffect(()=>{
                fetch(`https://calm-mountain-67432.herokuapp.com/users/${user.email}`)
                .then(res => res.json())
                .then(data => setAdmin(data.admin))
         }, [user.email])

         

         return {
                  user,
                  admin,
                  isLoading,
                  singInIUseingGoogle,
                  logOut
         }
}

export default useFirebase;