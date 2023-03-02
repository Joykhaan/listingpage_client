
const Productreducer = (state, action) => {
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true
            };
        case "MY_API_DATA":
        const featureData = action.payload.filter((curELem)=>{
            return curELem.featured === true;
        });
        // console.log('mydata',featureData);   
        return{
            ...state,
            isLoading:false,
            products:action.payload,
            featuresProducts: featureData,
        };
        case "API_ERROR":
            return{
                ...state,
                isLoading: false,
                isError: true
            };
            default:
                return state
    }
    
};

export default Productreducer;