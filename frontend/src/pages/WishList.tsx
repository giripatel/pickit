import React, { useEffect, useState } from 'react'
import axios from 'axios';
import WishListCard from '../components/WishListCard';
import AppBar from '../components/AppBar';

const WishList = () => {


    const [wishlist, setWishlist] = useState([{
        product: {
            id: 0,
            brand: "",
            description: "",
            mrp: 0,
            url: [""],
            currentPrice: 0
        } 
    }])

    const [loading, setLoading] = useState(true);


    const addToCart = async (productId: number) => {

        await axios.post("http://localhost:3000/api/v1/user/cart",{
            quantity : 1,
            productId : productId
        },{
            headers : {
                Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE0NTU4NTgwfQ.Aa4QLSxXnaTAvqBBKrRwo3LUrFhaP9P6L9dqb_0OuS4"
            }
        })
    }
    useEffect(() => {
        const list = async () => {

            const response  = await axios.get("http://localhost:3000/api/v1/user/wishlist",{
                headers : {
                    Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE0NTU4NTgwfQ.Aa4QLSxXnaTAvqBBKrRwo3LUrFhaP9P6L9dqb_0OuS4"
                }
            })
            
            const data = await response.data; 
             setWishlist(data);
             setLoading(false)
        }

        list()
    },[])

    if(loading){
        return "Loading.......!"
    }
    return (
        <div>
            <AppBar/>
            <div className='w-full flex justify-center mt-20'>
                <div className='flex flex-wrap gap-1 w-[1300px] '>
                    {wishlist.map((list,index) => {
                        return <div key={index}>

                            <WishListCard product={list.product} onClick={async () => {
                                addToCart(list.product.id)
                            }}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
  )
}

export default WishList
