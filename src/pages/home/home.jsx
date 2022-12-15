import React, {useEffect, useState} from "react";
//api routes
import {auth, deleteRecipe, getAllRecipes, saveRecipes, updateRecipe} from "../../services/api/apiroutes";
//styled
import {Header, HomeContent, HomeContentButton, HomeContentDescription, MainHome, NewReceipe} from "./homeStyle";
import {useDispatch, useSelector} from "react-redux";
import {
    setCategory,
    setCategoryEd,
    setDescription, setDescriptionEd,
    setTitle,
    setTitleEd,
    setUpId
} from "../../assets/redux/recipeSlice";

export default function Home() {
    const dispatch = useDispatch()
    const recipes = useSelector((state)=> state.recipe.recipes)
    const recipeCreate = useSelector((state)=> state.recipe.recipeSave)
    const recipeUpdate = useSelector((state)=> state.recipe.recipeUpdate)
    const headerToken = useSelector((state)=> state.api.axiosConfig)


    useEffect(()=>{
        auth(dispatch)
    },[])

    useEffect(()=>{
      headerToken && getAllRecipes(dispatch, headerToken)
    },[headerToken, recipes.length])


    const handle = (event, dispatch, setDispatch)=>{
       dispatch(setDispatch(event.target.value))
    }
    return (
        <>
        <Header>
            <h1>Receitaria</h1>
        </Header>
        <MainHome>
            <NewReceipe>
            <h2>Nova Receita</h2>
            <form onSubmit={(e)=>
                saveRecipes(e, recipeCreate.title, recipeCreate.category, recipeCreate.description, headerToken, dispatch)}
            >
                <input name="title" value={recipeCreate.title} onChange={(event)=>handle(event,dispatch,setTitle)} type="text" placeholder="Digite o nome da receita"/>
                <input name="category" value={recipeCreate.category} onChange={(event)=>handle(event,dispatch,setCategory)} type="text"placeholder="Digite a região da receita"/>
                <input name="description" value={recipeCreate.description} onChange={(event)=>handle(event,dispatch,setDescription)} type="text" placeholder="descreva a receita"/>
                <button type="submit" >Salvar</button>
            </form>
            </NewReceipe>
            <HomeContent>
                <h2>{recipeCreate.title}</h2>
                <h3>Comida: {recipeCreate.category}</h3>
                <p>Descrição: {recipeCreate.description}</p>
            </HomeContent>
            <hr/>
            <h2>Editar Receita</h2>
            <form onSubmit={(e)=> updateRecipe(e, recipeUpdate.id, recipeUpdate.title, recipeUpdate.category, recipeUpdate.description, headerToken,dispatch)}>
                <input name="title" value={recipeUpdate.title} onChange={(event)=>handle(event,dispatch,setTitleEd)} type="text" placeholder="Digite o nome da receita"/>
                <input name="category" value={recipeUpdate.category} onChange={(event)=>handle(event,dispatch,setCategoryEd)} type="text"placeholder="Digite a região da receita"/>
                <input name="description" value={recipeUpdate.description} onChange={(event)=>handle(event,dispatch,setDescriptionEd)} type="text" placeholder="descreva a receita"/>
                <button type="submit" >Salvar</button>
            </form>
            <HomeContent>
                <h2>ID: {recipeUpdate.id}</h2>
                <h2>Receita: {recipeUpdate.title}</h2>
                <h3>Comida: {recipeUpdate.category}</h3>
                <p>Descrição: {recipeUpdate.description}</p>
            </HomeContent>
            <hr/>
            <h2>Lista de receitas</h2>
            {!recipes ? "loading" : recipes.map(receita=>(
                    <HomeContent key={receita.id}>
                        <HomeContentDescription>
                            <h2>{receita.title}</h2>
                            <h3>Comida: {receita.category}</h3>
                            <p>Descrição: {receita.description}</p>
                        </HomeContentDescription>
                        <HomeContentButton>
                            <button onClick={()=> {
                                dispatch(setUpId(receita.id))
                                dispatch(setTitleEd(receita.title))
                                dispatch(setCategoryEd(receita.category))
                                dispatch(setDescriptionEd(receita.description))
                            }}>update</button>
                            <button onClick={()=> deleteRecipe(receita.id, headerToken, dispatch)}>delete</button>
                        </HomeContentButton>
                    </HomeContent>
                )
            )}

        </MainHome>
        </>
    )
}