import Banner from "@component/Components/Banner/Banner";
import { useProductContext } from "@component/Components/Context/ContextApi";
import FeaturedProducts from "@component/Components/FeaturedProducts/FeaturedProducts";
import Featuredproduct from "@component/Components/FeaturedProducts/Product/Featuredproduct";
import Homeproducts from "@component/Components/HomeProduct/Homeproducts";
import Link from "next/link";
import Homee from "./home/index"




export default function Home() {
  const { isLoading, featuresProducts ,products} = useProductContext();
  // console.log('satte home',curElem)

  console.log('geting dataa', featuresProducts)
  if (isLoading) {
    return <div>....Loading</div>
  }

  return (
    <>
      <Banner></Banner>


      <div className="w-3/4 mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {featuresProducts.map((curElem) => {
            return <Featuredproduct
              key={curElem.id}
              {...curElem}
            ></Featuredproduct>
          })}
          
        </div>
        <div className="text-center mb-8">
          <Link href={'/home'}> <button className="btn btn-primary">See All Product</button> </Link>
        </div>
      </div>

      {/* <Homee></Homee> */}

    </>
  )
}
