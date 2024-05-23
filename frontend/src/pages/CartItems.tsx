import axios from "axios";
import { useEffect, useState } from "react";
import CartItemCard from "../components/CartItemCard";
import AppBar from "../components/AppBar";
import { useTotalCartPrice } from "../hooks/useTotalCartPrice";
import TotalAmount, { TotalAmountSkeleton } from "@/components/ui/TotalAmount";
import Skeleton from "@/components/ui/Skeleton";

const CartItems = () => {
  const [cart, setCart] = useState([
    {
      product: {
        id: 0,
        brand: "",
        description: "",
        mrp: 0,
        url: [""],
        currentPrice: 0,
      },
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalMrp, setTotalMrp] = useState(0);
  const [loading, setLoading] = useState(true);

  const reomvCartItem = async (productId: number) => {
    await axios.delete("http://localhost:3000/api/v1/user/cart", {
      data: {
        productId: productId,
      },
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE0NTU4NTgwfQ.Aa4QLSxXnaTAvqBBKrRwo3LUrFhaP9P6L9dqb_0OuS4",
      },
    });
    const response = await axios.get("http://localhost:3000/api/v1/user/cart", {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE0NTU4NTgwfQ.Aa4QLSxXnaTAvqBBKrRwo3LUrFhaP9P6L9dqb_0OuS4",
      },
    });

    const data = await response.data.cart;

    const price = data.map((list: any) => list.product.currentPrice);
    const mrpList = data.map((list: any) => list.product.mrp);

    const currentPrice = price.reduce(
      (accumulator: number, currenValue: number) => accumulator + currenValue
    );
    const totalMrpCount = mrpList.reduce(
      (accumulator: number, currenValue: number) => accumulator + currenValue
    );

    setTotalMrp(totalMrpCount);
    setTotalPrice(currentPrice);
    setCart(data);
  };

  useEffect(() => {
    const list = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/user/cart",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE0NTU4NTgwfQ.Aa4QLSxXnaTAvqBBKrRwo3LUrFhaP9P6L9dqb_0OuS4",
          },
        }
      );

      const data = await response.data.cart;

      const price = data.map((list: any) => list.product.currentPrice);
      const mrpList = data.map((list: any) => list.product.mrp);

      const currentPrice = price.reduce(
        (accumulator: number, currenValue: number) => accumulator + currenValue
      );
      const totalMrpCount = mrpList.reduce(
        (accumulator: number, currenValue: number) => accumulator + currenValue
      );

      setTotalMrp(totalMrpCount);
      setTotalPrice(currentPrice);
      setCart(data);
      setLoading(false);
    };

    list();
  }, []);

  // const totalPrice = useTotalCartPrice(cart)
  // console.log(totalPrice);

  if (loading) {
    return (
      <div>
        <AppBar/>
        <div className="w-full flex justify-center mt-24">
          <div className="grid grid-cols-6">
            <div className='col-span-4 grid grid-cols-3 gap-1'>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
            </div>
            <div className="col-span-2">
            <TotalAmountSkeleton/>
          </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <AppBar />

      <div className="w-full flex justify-center mt-24">
        <div className="grid grid-cols-6 ">
          <div className="col-span-4 grid grid-cols-3 gap-1">
            {cart.map((item, index) => {
              return (
                <div key={index}>
                  <CartItemCard
                    product={item.product}
                    removeItem={() => {
                      reomvCartItem(item.product.id);
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="col-span-2">
            <TotalAmount totalMrp={totalMrp} totalPrice={totalPrice}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
