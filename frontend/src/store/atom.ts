import axios from "axios"
import {atom, atomFamily, selectorFamily}  from "recoil"

interface WishList{
    wishList: 
        {
            product: {
                id: number,
                brand: string,
                description: string,
                mrp: number,
                url: string[],
                currentPrice: number
            }
        }
}

interface Product {
    id: number;
    brand: string;
    description: string;
    mrp: number;
    url: string; // Single URL as a string for simplicity
    currentPrice: number;
  }

const wishListAtom = atomFamily({
    key : "wishListAtom",
    default : selectorFamily({
        key : "wishListAtomSelector",
        get : (param : any) => async () => {
            
            const response  = await axios.get("http://localhost:3000/api/v1/user/wishlist",{
                headers : {
                    Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE0NTU4NTgwfQ.Aa4QLSxXnaTAvqBBKrRwo3LUrFhaP9P6L9dqb_0OuS4"
                }
            })
            const wishlist = await response.data.wishlist; 
            return wishlist as Product[]
        }
    })
})