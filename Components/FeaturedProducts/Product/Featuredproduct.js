import Link from "next/link";
import React from "react";

const Featuredproduct = (curELem) => {
    // const {curELem}=curELem
    const {name,id,image,price,category,title,description}=curELem
    console.log('geting dta',curELem)
    return (
        <Link href={`/featuredproduct/${id}`} className="bg-blue-700 my-20 h-10">
            <div className="card card-compact w-100% mx-auto bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    
                </div>
            </div>
        </Link >
    );
};

export default Featuredproduct;