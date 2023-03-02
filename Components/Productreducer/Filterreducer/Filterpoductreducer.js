const filterReducer = (state, action) => {

    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.price);
            let maxPrice = Math.max(...priceArr)
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice }
            }
        case "GET_SORT_VALUE":
            let userSortValue = document.getElementById("sort");
            let sort_value = userSortValue.options[userSortValue.selectedIndex].value
            console.log(sort_value)
            return {
                ...state,
                sorting_value: sort_value,
            }
        case "SORTING_PRODUCTS":
            let newSortData;
            let sortProducts = [...action.payload]

            if (state.sorting_value === "lowest") {
                const sortingProducts = (a, b) => {
                    return a.price - b.price
                }
                newSortData = sortProducts.sort(sortingProducts)
            }
            if (state.sorting_value === "highest") {
                const sortingProducts = (a, b) => {
                    return b.price - a.price
                }
                newSortData = sortProducts.sort(sortingProducts)
            }
            if (state.sorting_value === "a-z") {
                newSortData = sortProducts.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            }
            if (state.sorting_value === "z-a") {
                newSortData = sortProducts.sort((a, b) => {
                    return b.name.localeCompare(a.name);
                })
            };
            return {
                ...state,
                filter_products: newSortData,
            };





        // case "UPDATE_FILTERS_VALUE":
        //     const {name,value}=action.payload;

        // return {
        //     ...state,
        //     filters:{
        //       ...state.filters,  
        //         [name]:value,
        //         }
        // }
        // case "FILTERS_PRODUCTS":
        //     let newSortDataa;
        //     let sortProductss = [state.all_products]
        //     const {text,category}=state.filters;

        //     if(text){
        //        newSortDataa=sortProductss.map((curElem)=>{
        //            console.log("issue",curElem.name)
        //            return  curElem
        //         //     return dtat
        //         //    });
        //         })
        //  }
        //  if(category){
        //                 newSortDataa=sortProductss.filter((curElem)=>{
        //                     return curElem.category===category;
        //                 })
        //             }
        //  return {
        //                 ...state,
        //                 filter_products: newSortDataa,
        //             };

        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            };
        case "FILTERS_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, company, color, price } = state.filters;
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    console.log("issue1", tempFilterProduct)
                    return curElem.name.toLowerCase().includes(text);
                })
            }
            else if (category !== "ALL") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    console.log("issue2", tempFilterProduct)
                    return curElem.category === category;
                })
            }
            if (company !== "ALL") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    console.log("issue2", tempFilterProduct)
                    return curElem.company.toLowerCase() === company.toLowerCase();
                })
            }
            if (color !== "ALL") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => { return curElem.colors.includes(color) })
            }
            if (price === 0) {
                tempFilterProduct = tempFilterProduct.filter((curElem) =>
                    curElem.price == price)
            }
            else {
                tempFilterProduct = tempFilterProduct.filter((curElem) =>
                    curElem.price <= price)
            }
            return {
                ...state,
                filter_products: tempFilterProduct,
                // all_products: tempFilterProduct
            };
            
        case "CLEAR_FILTERS":
            return {
                ...state,
                filter_products: [...action.payload],
                
            }
        default:
            return state;
    }
}
export default filterReducer