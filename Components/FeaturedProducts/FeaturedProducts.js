const FeaturedProducts = (curELem) => {
    const {title}=curELem
    return (
        <div className="bg-green-500">
            <h1>{title}</h1>
        </div>
    );
};

export default FeaturedProducts;