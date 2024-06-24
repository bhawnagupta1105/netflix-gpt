import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice";
import  movieReducer from "../Utils/movieSlice";
import gptReducer from "../Utils/gptSlice";
import configReducer from "../Utils/configSlice";
//import { useNavigate } from "react-router-dom";

const appstore = configureStore(
    {
        reducer: {
            user:userReducer,
            movies:movieReducer,
            gpt:gptReducer,
            config:configReducer,
        },

    });
export default appstore;