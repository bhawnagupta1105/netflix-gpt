import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      <Header />

      <div className="absolute w-[100%]">
        <img
          className="max-h-full bg-cover bg-repeat w-full"
          src="https://i.redd.it/zjgs096khv591.jpg"
          alt="background-img1"
        ></img>

        <img
          className="absolute inset-0 opacity-30 w-full"
          src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg"
          alt="background-img2"
        ></img>
      </div>
      <div>
        <form className="absolute p-12 bg-black w-3/12 text-white my-36 mx-auto right-0 left-0 bg-opacity-70">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm &&
            (<input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-600 rounded-lg"
          ></input>)}
          <input
            type="text"
            placeholder="Email/Username"
            className="p-4 my-2 w-full bg-gray-600 rounded-lg"
          ></input>
         
          <input
            type="password"
            placeholder="Enter your Password"
            className="p-4 my-2 w-full bg-gray-600 rounded-lg"
          ></input>
          <button
            className="p-4 my-4 bg-red-600 w-full rounded-lg"
           
          >
            Sign In
          </button>
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <div>Need help?</div>

          <p onClick={toggleSignInForm} className="underline">{isSignInForm ? "New to Netflix?Sign up now":"Already Registered? Sign in now"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
