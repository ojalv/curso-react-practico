import { useState, useEffect } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu"
function Home() {
  const [items, setItems] = useState(null)

    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])
  
  return (
    <>
      <Layout>
        Home
        <CheckoutSideMenu />
        <ProductDetail />
        <div className="">  
          <div className=" grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
          {
            items?.map((item) => (
              <Card key={item.id} data={item}/>
            ))
          }
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
