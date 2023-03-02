import { useFilterContext } from "../Context/FilterContext";


const Sorting = () => {
    const {sorting}=useFilterContext();
    return (
        
        <form action='#'>
        <label htmlFor='sort'></label>
        <select name='sort' id='sort' onClick={sorting}>
            
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
        </select>

    </form>
        
    );
};

export default Sorting;