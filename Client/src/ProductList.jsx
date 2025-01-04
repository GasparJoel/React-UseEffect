import { useEffect, useState } from "react"
import axios from "axios";

export const ProductList = () => {

  const [products, setproducts] = useState([])

  const [category, setcategory] = useState("women's clothing")



  useEffect(() => {

    console.log('Se activo el useffect')

    const fetchProducts = async ()=>{

      try {
        const  response = await axios.get(`https://fakestoreapi.com/products/category/${category} `)
        setproducts(response.data)
        console.log(response.data)
        
      } catch (error) {
        console.log(error)
      }
  }

    fetchProducts()

  }, [category])
  


  return (
    <div>
      <button onClick={()=>{setcategory('electronics')}} >electronics</button>
      <button onClick={()=>{setcategory("women's clothing")}} >women's clothing</button>
      <button onClick={()=>{setcategory('jewelery')}} >jewelery</button>
   
  
      
          {
            products.map((producto)=>(

                <div key={producto.id}>
                    <h1>{producto.title}  </h1>
                    <img src={producto.image} alt="" />
                    <h3> {producto.price} </h3>

                </div>
            ))  
          }

    </div>
  )
}


