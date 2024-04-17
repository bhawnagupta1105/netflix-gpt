import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice";
import  movieReducer from "../Utils/userSlice";
const appstore = configureStore(
    {
        reducer: {
            user:userReducer,
            movies:movieReducer,
        }

    }
)
export default appstore;