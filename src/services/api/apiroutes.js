import axios from "axios";
import {setRecipes} from "../../assets/redux/recipeSlice";
import {setAxiosConfig} from "../../assets/redux/apiSlice";

// autorização

export const auth = (dispatch, email, password)=>{
    email = 'dev.marcotullio@gmail.com'
    password = '12345678'

    axios.post("http://localhost:8080/auth",{
        email,
        password
    }).then(res=>{
        dispatch(setAxiosConfig(res.data.token))
    }).catch(err => console.log(err))

}

// capturar as informações


export const getAllRecipes = (dispatch, axiosConfig)=>{
    axios.get("http://localhost:8080/receitas", axiosConfig).then(response=>{
        dispatch(setRecipes(response.data.receitas.rows))
        console.log(response.data)
    }).catch(err => console.log(err))
}

//salvar novas informações

export const saveRecipes = (e, title, category, description, axiosConfig, dispatch)=>{
    e.preventDefault()
    const receita = {
        title:title,
        category:category,
        description: description
    }

    axios.post("http://localhost:8080/receita", receita, axiosConfig)
        .then(response=>{
            if (response.status === 200){
                alert("receita cadastrada")
                getAllRecipes(dispatch, axiosConfig)
            }
        }).catch(err=>{
        console.log(err)
    })
}

//atualizar informação

export const updateRecipe = (e, id, title, category, description, axiosConfig, dispatch)=>{
    e.preventDefault()
    const receita = {
        title:title,
        category:category,
        description: description
    }

    axios.put(`http://localhost:8080/receita/${id}`, receita, axiosConfig)
        .then(response=>{
            if (response.status === 200){
                alert("receita atualizado!! ")
                getAllRecipes(dispatch, axiosConfig)
            }
        }).catch(err=>{
        console.log(err)
    })
}


//deletar uma info

export const deleteRecipe = (id, axiosConfig, dispatch)=>{
    axios.delete(`http://localhost:8080/receita/${id}`, axiosConfig)
        .then(response =>{
            alert("conteudo deletado")
            getAllRecipes(dispatch, axiosConfig)
        }).catch(err=> console.log(err))
}