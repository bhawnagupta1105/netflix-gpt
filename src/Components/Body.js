 import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../Utils/appstore";
//import MovieCard from "./MovieCard";
//import MovieCardPupup from "./movieCardPopup";
//import SignUp from "./SignUp";

//import GptSearch from "./GptSearch";
//import GptSearchBar from "./GptSearchBar";
//import { useNavigate } from "react-router-dom";
//import Login from "./Login";

//For Payment
// import SignUpClick from "./Payment/SignUpClick";
// import Plan from "./Payment/Plan";
// import PlanDetails from "./Payment/PlanDetails";
// import Payment from "./Payment/Payment";
// import CardPayment from "./Payment/CardPayment";
// import UpiPayment from "./Payment/UpiPayment";
// import TermsUse from "./Payment/TermsUse";



const Body = () => {
  const appRouter = createBrowserRouter([
                                //For Payment
                              // {path: "/", element: <SignUpClick/>},
                              // {path: "/termsuse", element: <TermsUse/>},
                              // {path: "/cardPayment", element: <CardPayment/>},
                              // {path: "/upiPayment", element:<UpiPayment/>},

                              // {path: "/signUpClick", element: <SignUpClick/>},
                              // {path: "/plan", element: <Plan/>},
                              // {path:"/planDetails", element:<PlanDetails/>},
                              // {path:"/payment", element:<Payment/>}
{path: "/", element: <Login/>},
    {
      path: "/browse",
      element: <Browse />,
    },

  ]);

  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
    // <div>
    //   <RouterProvider router={appRouter} />
    // </div>
  );
};
export default Body;
