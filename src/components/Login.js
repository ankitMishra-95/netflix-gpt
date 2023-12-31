import { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux";
import {addUser} from '../utils/userSlice';
import { PHOTO_URL } from "../utils/constants";
import { BG_IMAGE_URL } from "../utils/constants";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const dispatch = useDispatch();

    const handleFormToggle = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        let errMessage ;
        if(isSignInForm) {
            errMessage =  checkValidData(email.current.value, password.current.value);
        } else {
            errMessage =  checkValidData(email.current.value, password.current.value, name.current.value);
        }
       setErrorMessage(errMessage);
       if(errMessage) return;

       if(!isSignInForm) {
        // sign up logic 
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value, photoURL: PHOTO_URL
              }).then(() => {
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid, email, displayName, photoURL}));
                  
              }).catch((error) => {
                setErrorMessage(error.message)
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
        });
       } else {
        // sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(user);
        
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
        });
       }

    }

    return <div className="relative">
        <Header />
        <div> 
            <img src={BG_IMAGE_URL} className="h-screen md:h-auto object-cover" alt="bg" />
        </div>
        <form className="w-11/12  md:w-1/4 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-black bg-opacity-80 md:p-16 p-6">
            <h3 className="text-white text-3xl mb-5">{isSignInForm ? "Sign In" : "Sign Up"} </h3>
            {!isSignInForm && <input className="w-full block p-3 rounded bg-neutral-700 mb-5 text-white" ref={name} type="text" placeholder="Full Name" />}
            <input className="w-full block p-3 rounded bg-neutral-700 mb-5 text-white" type="text" placeholder="Email or Phone" ref={email} />
            <input className="w-full block p-3 rounded bg-neutral-700 mb-2 text-white" type="password" placeholder="Password" ref={password} />
            <span className="text-red-800">{errorMessage}</span>
            <button type="button" className="w-full block p-3 rounded bg-red-600 text-white mb-12 mt-8" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="text-white cursor-pointer" onClick={handleFormToggle}>
            {isSignInForm ? "New to netflix? Sign up now" : "Already Registered? Sign in now"}
                
                </p>
        </form>
    </div>
} 

export default Login;