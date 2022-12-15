import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    axiosConfig:''
}

export const apiSlice = createSlice({
    name:"api",
    initialState,
    reducers:{
        setAxiosConfig: (state, action)=>{
            state.axiosConfig =  {headers:{
                Authorization: `Bearer ${action.payload}`
            }
        }
    }
}})

export const {setAxiosConfig} = apiSlice.actions;
export default apiSlice.reducer;