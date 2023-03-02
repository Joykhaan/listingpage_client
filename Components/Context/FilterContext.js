import { useProductContext } from "./ContextApi";

import { useReducer, createContext, useContext, useEffect } from  "react";
import reducer from "../Productreducer/Filterreducer/Filterpoductreducer";



export const FilterContext = createContext();

const initialState = {
    
    filter_products: [],
    all_products: [],
    sorting_value:"highest",
    filters:{
        text:"",
        category: "all",
        company:"all",
        color:"all",
        maxPrice:0,
        minPrice:0,
        price:0,
    },
    
}

export const FilterContextProvider = ({ children }) => {
    
    const {products}=useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState)

    const sorting =()=>{
        dispatch({type: "GET_SORT_VALUE"})
    }
    const updateFilterValue =(event)=>{
        let name=event.target.name;
        let value=  event.target.value;

        return dispatch({type:"UPDATE_FILTERS_VALUE", payload:{name,value}})
    }
    
    // to clear filters 
    const clearFilters=()=>{
        return dispatch({type:"CLEAR_FILTERS", payload:products})
    }
    console.log('clear',state.filter_products)
    
    useEffect(() => {
        
        dispatch({type: "SORTING_PRODUCTS", payload:products});
    }, [ state.sorting_value]);
    useEffect(() => {
        dispatch({type:"FILTERS_PRODUCTS"})
        
    }, [  state.filters]);
    console.log("issue3",state.filter_products)

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload:products})
    }, [products]);

    return <FilterContext.Provider value={{...state, sorting, updateFilterValue,clearFilters}}>
        {children}
        </FilterContext.Provider>

}

// custom hook
export const useFilterContext = () => {
    return useContext(FilterContext);
}
// export { AppProvider, AppContext, useProductContext};


