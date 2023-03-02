

import { useProductContext } from '@component/Components/Context/ContextApi';
import Featuredproduct from '@component/Components/FeaturedProducts/Product/Featuredproduct';
import FeaturedProducts from '@component/Components/FeaturedProducts/FeaturedProducts';
import axios from 'axios';
import { FaCheck } from "react-icons/fa"

import Homeproducts from '@component/Components/HomeProduct/Homeproducts';
import { useFilterContext } from '@component/Components/Context/FilterContext';
import Sorting from '@component/Components/Sorting/Sorting';
import Link from 'next/link';

const index = () => {
    // const data = props.data.products;
    const { filters: { text, category, color, price, maxPrice, minPrice }, filter_products, updateFilterValue, all_products, clearFilters } = useFilterContext();
    const { isLoading, products, featuresProducts } = useProductContext();
    // console.log('get dataaaa', products);
    // to get unique data of each field
    const getUniqueData = (data, property) => {
        let newVal = data.map((curElem) => {
            return curElem[property];
        })
        if (property === "colors") {
            // return (newVal=['ALL',...new Set([].concat(...newVal))]);
            newVal = newVal.flat()
        }


        return (newVal = ["ALL", ...new Set(newVal)]);

    }
    // uniqu data
    const categoryData = getUniqueData(all_products, "category")
    // uniqu data
    const companyData = getUniqueData(all_products, "company")

    const colorsData = getUniqueData(all_products, "colors")
    // console.log("category",categoryData)

    if (isLoading) {
        return <div>....Loading</div>
    }
    return (
        <div className='w-3/4 mx-auto'>
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" name='text' value={text} onChange={updateFilterValue} placeholder="search" />
                </form>
            </div>
            <section>
                <div className='grid grid-cols-5 gap-4 my-20'>
                    <div className='col-span-1 bg-red-500 '>
                        <Sorting></Sorting>
                        <div className='filter_category'>
                            <h3>category</h3>
                            <div>
                                {
                                    categoryData.map((curElem, index) => {
                                        // console.log("category",curElem)
                                        return <button
                                            key={index}
                                            type="button"
                                            name='category'
                                            onClick={updateFilterValue}
                                            value={curElem}

                                        >{curElem}</button>
                                    })
                                }
                            </div>
                        </div>
                        <div className='filter_company'>
                            <h3>company</h3>
                            <form action='#'>
                                <select
                                    name='company'
                                    id='company'
                                    onClick={updateFilterValue}
                                >
                                    {companyData.map((curElem, index) => {
                                        return <option
                                            key={index}
                                            value={curElem}
                                            name="company"
                                        >{curElem}</option>
                                    })}
                                </select>
                            </form>
                        </div>
                        <div className='filter_colors'>
                            <h3>colors</h3>
                            <div>
                                {
                                    colorsData.map((curCOlor, index) => {
                                        if (curCOlor === "ALL") {
                                            return <button
                                                key={index}
                                                value={curCOlor}
                                                name="color"
                                                type='button'
                                                className='text-sm text-white'
                                                // style={{backgroundColor:curCOlor}}
                                                onClick={updateFilterValue}
                                            >
                                                ALL
                                            </button>
                                        }
                                        return <button
                                            key={index}
                                            value={curCOlor}
                                            name="color"
                                            type='button'
                                            className='w-4 h-4 rounded'
                                            style={{ backgroundColor: curCOlor }}
                                            onClick={updateFilterValue}
                                        >
                                            {color === curCOlor ? <FaCheck className='text-white' /> : null}
                                        </button>
                                    })
                                }
                            </div>
                        </div>
                        <div className='price_filter'>
                            <h3>price</h3>
                            <p>
                                {price}
                            </p>
                            <input type="range"
                                name='price'
                                min={minPrice}
                                max={maxPrice}
                                value={price}
                                onChange={updateFilterValue}
                            />
                        </div>
                        <div onClick={clearFilters} className='clear_filter btn btn-primary'>
                            <button>Clear filters</button>
                        </div>

                    </div>
                    <div className='col-span-4 bg-red-500 '>
                        <div className='grid grid-cols-3 gap-4 mx-12'>

                            {filter_products.map((curElem) => {
                                // console.log('sort',curElem.name)
                               return <Link href={`/featuredproduct/${curElem.id}`} >
                                     <Homeproducts
                                    key={curElem.id}
                                    {...curElem}
                                ></Homeproducts>
                                </Link >
                                
                            })}





                            {/* {
                                featuresProducts.map((curElem)=>{
                                    return <Homeproducts
                                    key={curElem.id}
                                    {...curElem}
                                    ></Homeproducts>
                                })
                            } */}

                            {/* <Featuredproduct></Featuredproduct> */}
                        </div>
                    </div>

                </div>
            </section>
            <section>
            </section>
        </div>


    );
};

export default index;
// export const getStaticProps = async () => {
//     const { data } = await axios.get("https://dummyjson.com/products");
//     // const data= await res.json();
//     console.log({ data }.data.products);
//     return {
//         props: {
//             data: data || {}
//         }
//     }
//     // return{res}
// }