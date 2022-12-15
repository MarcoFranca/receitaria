import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import apiReducer from "./apiSlice"
import recipeReducer from "./recipeSlice"

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck:false
})

export const store = configureStore({
    reducer:{
        api: apiReducer,
        recipe:recipeReducer
    },
    middleware:customizedMiddleware
})