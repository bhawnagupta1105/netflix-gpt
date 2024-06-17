// import Login from "./Login";
//import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
//import MovieCard from "./MovieCard";
//import MovieCardPupup from "./movieCardPopup";
//import SignUp from "./SignUp";
import SignUpClick from "./SignUpClick";
//import Login from "./Login";
import Plan from "./Plan";
import PlanDetails from "./PlanDetails";
//import GptSearch from "./GptSearch";
//import GptSearchBar from "./GptSearchBar";

const Body = () => {
  const appRouter = createBrowserRouter([

    {path: "/", element: <SignUpClick/>},
//{path: "/browse", element: <Browse/>},
// {path: "/signUp", element: <SignUp/>},
{path: "/signUpClick", element: <SignUpClick/>},
{path: "/plan", element: <Plan/>},
{path:"/planDetails", element:<PlanDetails/>}
// {path: "/browse", element: <Browse/>},
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
