import axios from 'axios';
import { useEffect, useState } from 'react'
import CartItemCard from '../components/CartItemCard';
import AppBar from '../components/AppBar';

const CartItems = () => {

  const [cart, setCart] = useState([{
    product: {
        id: 0,
        brand: "",
        description: "",
        mrp: 0,
        url: [""],
        currentPrice : 0
    } 
}])

  const [loading, setLoading] = useState(true);


  const reomvCartItem = async (productId: number) => {

      await axios.delete("http://localhost:3000/api/v1/user/cart",{
         data:{
          productId : productId
      },
        headers : {
            Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE0NTU4NTgwfQ.Aa4QLSxXnaTAvqBBKrRwo3LUrFhaP9P6L9dqb_0OuS4"
        }
    })
    const response  = await axios.get("http://localhost:3000/api/v1/user/cart",{
            headers : {
                Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE0NTU4NTgwfQ.Aa4QLSxXnaTAvqBBKrRwo3LUrFhaP9P6L9dqb_0OuS4"
            }
        })
        
        const data = await response.data.cart; 
        setCart(data);
  }

  useEffect(() => {
    const list = async () => {

        const response  = await axios.get("http://localhost:3000/api/v1/user/cart",{
            headers : {
                Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE0NTU4NTgwfQ.Aa4QLSxXnaTAvqBBKrRwo3LUrFhaP9P6L9dqb_0OuS4"
            }
        })
        
        const data = await response.data.cart; 
        setCart(data);
        setLoading(false)
    }


    list()
  },[])
    
  if(loading) {
   return <div className="w-full h-screen flex justify-center items-center"> 
      Loading Cart......!
    </div>
  }
  return (
    <div>
    <AppBar/>
    <div className='w-full flex justify-center mt-24'>
        <div className='grid grid-cols-4 gap-1 '>
         {cart.map((item,index) => {
          
          return <div key={index}>
            <CartItemCard product={item.product} removeItem={() => {
              reomvCartItem(item.product.id)
            }}/>
          </div>
         })}  
            
        </div>
    </div>
</div>
  )
}

export default CartItems
