import { useState } from "react";
import Header from "./Header";
const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const handleFormToggle = () => {
        setIsSignInForm(!isSignInForm);
    }

    return <div className="relative">
        <Header />
        <div>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg image" />
        </div>
        <form className="w-1/4 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-black bg-opacity-80 p-16">
            <h3 className="text-white text-3xl mb-5">{isSignInForm ? "Sign In" : "Sign Up"} </h3>
            {!isSignInForm && <input className="w-full block p-3 rounded bg-neutral-700 mb-5" type="text" placeholder="Full Name" />}
            <input className="w-full block p-3 rounded bg-neutral-700 mb-5" type="text" placeholder="Email or Phone" />
            <input className="w-full block p-3 rounded bg-neutral-700 mb-10" type="password" placeholder="Password" />
            <button className="w-full block p-3 rounded bg-red-600 text-white mb-10">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="text-white cursor-pointer" onClick={handleFormToggle}>
            {isSignInForm ? "New to netflix? Sign up now" : "Already Registered? Sign in now"}
                
                </p>
        </form>
    </div>
} 

export default Login;