
const featuredproductid = ({ product }) => {
    return (
        <div className="w-3/4 mx-auto">
            {/* <h1 className="text-center">{product.id}</h1> */}
            <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
                <figure><img src={product.image[0].url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    
                </div>
            </div>
        </div>
    );
};
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://api.pujakaitem.com/api/products/${params.featuredproductId}`);
    const data = await res.json();
    return {
        props: {
            product: data
        }
    }

}

export const getStaticPaths = async () => {
    const res = await fetch("https://api.pujakaitem.com/api/products");
    const product = await res.json();
    const paths = product?.map((curElem) => {
        // console.log('product',curElem.id)
        return {
            params: {
                featuredproductId: `${curElem.id}`
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}
export default featuredproductid;