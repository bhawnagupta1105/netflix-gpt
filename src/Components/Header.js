import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../Utils/constants";
import { changeLanguage } from "../Utils/configSlice";
import lang from "../Utils/languageConstants";
//import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langkey = useSelector((store) => store.config.lang);
  const HandelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL,
          })
        );

        // ...
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");

        // User is signed out
        // ...
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  const HandelSignIn = () => {
    navigate("/");
  };
  const handelGptSearchClick = () => {
    //Toggle my Gpt Search
    dispatch(toggleGptSearchView());
  };

  const handelLanguageChange = (e) => {
//console.log(e.target.value)
dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="fixed top-0 left-0 z-[1000]  w-screen  px-8 py-2 bg-gradient-to-b from-black  flex  flex-col  md:flex-row md:justify-between ">
      <div className=" flex ">
        <div>
          <img
            className=" w-44 mx-auto md:mx-0"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          ></img>
        </div>
        {user && (
          <div className="p-2 cursor-pointer flex justify-between">
            <button className="m-2 p-2 text-xl text-white ">{lang[langkey].Home}</button>
            <button className="m-2 p-2 text-xl text-white">{lang[langkey].Tv_Shows}</button>
            <button className="m-2 p-2 text-xl text-white">{lang[langkey].Movies}</button>
            <button className="m-2 p-2 text-xl text-white">
             {lang[langkey].NewPopular}
            </button>
            <button className="m-2 p-2 text-xl text-white">{lang[langkey].My_List}</button>
            {showGptSearch&&<select className="p-2 bg-gray-900 text-white m-2 " onChange={handelLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>}
            <button
              className="m-2 p-2 text-xl text-white"
              onClick={handelGptSearchClick}
            >
              {showGptSearch? "Home" : "GPT Search"}
            </button>
          </div>
        )}
      </div>
      {user ? (
        <div className="flex p-2">
          <img
            className="h-[45px] w-[45px] mt-3 mx-2"
            src="https://img.icons8.com/ios/50/FFFFFF/search--v1.png"
            alt="search--v1"
          />
          <img
            className="h-[45px] w-[45px] mt-3 mx-2"
            src="https://img.icons8.com/serif/32/FFFFFF/experimental-appointment-reminders-serif.png"
            alt="experimental-appointment-reminders-serif"
          />

          <img
            className="w-12 h-12 m-2 rounded-lg hidden md:block"
            alt="username"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2at5hPd04u1iJkhn3qC8j0WFxqcOVeeZfx66MklJ_Lg&s"
          ></img>
          <button
            className="text-white  bg-red-600 font-bold text-xl px-4 py-2 m-2 rounded-lg "
            onClick={HandelSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          className="text-white bg-red-600 font-bold  text-lg px-[1%] py-[1%]  md:py-0 m-[1%] rounded-lg "
          onClick={HandelSignIn}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Header;
