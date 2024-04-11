import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";
import {useNavigate} from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormessage, seterrormessage] = useState(null);
  const navigate = useNavigate();
  //This will create a reference
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const HandelButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    seterrormessage(message);
    if (message) return;

    //Sign in/Sign up

    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");


          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    }
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute p-12 bg-black w-3/12 text-white my-36 mx-auto right-0 left-0 bg-opacity-70"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-600 rounded-lg"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email/Username"
            className="p-4 my-4 w-full bg-gray-600 rounded-lg"
          ></input>

          <input
            ref={password}
            type="password"
            placeholder="Enter your Password"
            className="p-4 my-4 w-full bg-gray-600 rounded-lg"
          ></input>
          <p className="text-red-500 text-lg p-2">{errormessage}</p>
          <button
            className="p-4 my-4 bg-red-600 w-full rounded-lg"
            onClick={HandelButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <div className="float-right">Need help?</div>
          </div>

          <p onClick={toggleSignInForm} className="underline my-4 ">
            {isSignInForm
              ? "New to Netflix?Sign up now"
              : "Already Registered? Sign in now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;