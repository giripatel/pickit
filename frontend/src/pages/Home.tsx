import { useState } from 'react'
import './App.css'
import AppBar from '../components/AppBar'
import Card from '../components/Card'
import axios from 'axios'

function Home() {

  const addToWishList = async (productId : number) => {
              
    await axios.post("http://localhost:3000/api/v1/user/wishlist",{
         productId
     },{
       headers : {
         Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE0NTU4NTgwfQ.Aa4QLSxXnaTAvqBBKrRwo3LUrFhaP9P6L9dqb_0OuS4"
       }
     })
   }

  const [products, setProducts] = useState([
    "https://cdn.pixabay.com/photo/2018/12/25/13/45/rock-object-3894284_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/10/03/23/19/bicycle-1713165_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/10/26/21/22/fabric-2892541_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/03/09/16/02/silk-4916174_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/12/17/19/10/silk-571834_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/01/18/19/28/rose-4776198_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/02/02/15/23/rose-5974372_1280.jpg",
    "/https://cdn.pixabay.com/photo/2018/01/04/19/43/rose-3061486_1280.jpg"
  ])

  
  return (
    <div>
      <AppBar/>
       <div className='flex gap-2 mt-24
       flex-wrap justify-end  me-5'>
        {products.map((product, index) =>{
          return (
            <div key={index}>
              <Card image={product} price={25} onClick={async () => {addToWishList(2)}}/>
            </div>
          )
        } )}
      </div> 
    </div>
  )
}

export default Home
