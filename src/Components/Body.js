// import Login from "./Login";
//import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
//import MovieCard from "./MovieCard";
//import MovieCardPupup from "./movieCardPopup";
//import SignUp from "./SignUp";
import SignUpClick from "./Payment/SignUpClick";
//import Login from "./Login";
import Plan from "./Payment/Plan";
import PlanDetails from "./Payment/PlanDetails";
import Payment from "./Payment/Payment";
import CardPayment from "./Payment/CardPayment";
import UpiPayment from "./Payment/UpiPayment";
import TermsUse from "./Payment/TermsUse";
//import GptSearch from "./GptSearch";
//import GptSearchBar from "./GptSearchBar";
//import { useNavigate } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([

    {path: "/", element: <SignUpClick/>},
    {path: "/termsuse", element: <TermsUse/>},
    {path: "/cardPayment", element: <CardPayment/>},
    {path: "/upiPayment", element:<UpiPayment/>},
//{path: "/browse", element: <Browse/>},
// {path: "/signUp", element: <SignUp/>},
{path: "/signUpClick", element: <SignUpClick/>},
{path: "/plan", element: <Plan/>},
{path:"/planDetails", element:<PlanDetails/>},
{path:"/payment", element:<Payment/>}
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
