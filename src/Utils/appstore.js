import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice";
import  movieReducer from "../Utils/userSlice";
import gptReducer from "../Utils/gptSlice";
const appstore = configureStore(
    {
        reducer: {
            user:userReducer,
            movies:movieReducer,
            gpt:gptReducer,
        }

    }
)
export default appstore;