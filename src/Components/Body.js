// import Login from "./Login";
// import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
//import MovieCard from "./MovieCard";
//import MovieCardPupup from "./movieCardPopup";
import SignUp from "./SignUp";
//import Login from "./Login";
//import GptSearch from "./GptSearch";
//import GptSearchBar from "./GptSearchBar";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignUp/>,
    },
    // {
    //   path: "/browse",
    //   element: <Browse />,
    // },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
