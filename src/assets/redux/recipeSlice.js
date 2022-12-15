import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    recipes:'',
    recipeSave:{
        title:'',
        category:'',
        description:'',
    },
    recipeUpdate:{
        title:'',
        category:'',
        description:'',
        id:''
    }
}

export const recipeSlice = createSlice({
    name:'recipe',
    initialState,
    reducers:{
        setRecipes:(state, action)=>{
          state.recipes = action.payload
        },
        setTitle: (state,action)=>{
            state.recipeSave.title = action.payload
        },
        setCategory: (state,action)=>{
            state.recipeSave.category = action.payload
        },
        setDescription: (state, action)=>{
            state.recipeSave.description = action.payload
        },
        setTitleEd: (state,action)=>{
            state.recipeUpdate.title = action.payload
        },
        setCategoryEd: (state,action)=>{
            state.recipeUpdate.category = action.payload
        },
        setDescriptionEd: (state, action)=>{
            state.recipeUpdate.description = action.payload
        },
        setUpId:(state, action)=>{
            state.recipeUpdate.id = action.payload
        }
    }
})

export const {setTitle,setCategory, setDescription, setTitleEd, setCategoryEd,
    setDescriptionEd, setUpId, setRecipes} = recipeSlice.actions
export default recipeSlice.reducer