import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react"
import reducer from "../Productreducer/Productreducer"
const AppContext = createContext();


const API = "http://localhost:5000/products";

const initialState = {
    isLoading: false,
    iserror: false,
    products: [],
    featuresProducts: []
}

const AppProvider = ({ children }, props) => {
    console.log('satte',props)

    const [state, dispatch] = useReducer(reducer, initialState)
    
   
    const sattee= state;
    // console.log('satte',sattee)
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const data = await axios.get(url);
            const datas = await data.data;
            // console.log("apiu datas",data.data);
            dispatch({ type: "MY_API_DATA", payload: datas })

        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }


    }
    useEffect(() => {
        getProducts(API)
    }, []);
   
    



    return <AppContext.Provider value={{ ...state}}>{children}</AppContext.Provider>

}

// custom hook
const useProductContext = () => {
    return useContext(AppContext);
}
export { AppProvider, AppContext, useProductContext};


