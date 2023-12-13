import { configureStore } from "@reduxjs/toolkit";
import apiData from "./apiData";


const appStore=configureStore({

    reducer:{
        resapi:apiData
    }
});
export default appStore;