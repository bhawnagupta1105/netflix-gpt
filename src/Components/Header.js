import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
  return (
    <div className="fixed top-0 left-0 z-[1000]  w-screen  px-8 py-2 bg-gradient-to-b from-black  flex justify-between ">
      <div className=" flex ">
        <div>
        <img
          className=" w-44 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        ></img>
      </div>
    {user &&  (<div className="p-2 cursor-pointer">
        <button className="m-2 p-2 text-xl text-white " >Home</button>
        <button className="m-2 p-2 text-xl text-white">Tv Shows</button>
        <button className="m-2 p-2 text-xl text-white">Movies</button>
        <button className="m-2 p-2 text-xl text-white">New & Popular</button>
        <button className="m-2 p-2 text-xl text-white">My List</button>
      </div>)}
      </div>
      {user ? (
        <div className="flex p-2">
          <img
            className="w-12 h-12 m-2 rounded-lg"
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
          className="text-white bg-red-600 font-bold  text-xl px-4 py-2 m-2 rounded-lg "
          onClick={HandelSignIn}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Header;