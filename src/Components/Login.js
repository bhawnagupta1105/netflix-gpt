import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";

import {useDispatch} from "react-redux";
import { addUser } from "../Utils/userSlice";
//import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { Photo_Url } from "../Utils/constants";
//import Footer from "./Footer";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormessage, seterrormessage] = useState(null);
  const dispatch = useDispatch();
  //This will create a reference
  const name = useRef(null);
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
          updateProfile(user, {
            displayName: name.current.value, photoURL: {Photo_Url}
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL,
              })
            );


            // Profile updated!
            // ...
          }).catch((error) => {
   

            // An error occurred
            // ...
          });
          console.log(user);
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
      <div>

      <div className="absolute w-[100%]">
        <img
          className="h-screen object-cover"
         // src="https://i.redd.it/zjgs096khv591.jpg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
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
          className="absolute p-[2%] bg-black w-full md:w-3/12 text-white my-36 mx-auto right-0 left-0 bg-opacity-70"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
            ref={name}
              type="text"
              placeholder="Full Name"
              className="p-[4%] my-[4%] w-full bg-gray-600 rounded-lg"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email/Username"
            className="p-[4%] my-[4%] w-full bg-gray-600 rounded-lg"
          ></input>

          <input
            ref={password}
            type="password"
            placeholder="Enter your Password"
            className="p-[4%] my-[4%] w-full bg-gray-600 rounded-lg"
          ></input>
          <p className="text-red-500 text-lg p-2">{errormessage}</p>
          <button
            className="p-[4%] my-[4%] bg-red-600 w-full rounded-lg"
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

          <p onClick={toggleSignInForm} className="underline my-[4%] ">
            {isSignInForm
              ? "New to Netflix?Sign up now"
              : "Already Registered? Sign in now"}
          </p>
        </form>
      </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Login;
