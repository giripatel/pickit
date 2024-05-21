import axios from "axios";
import { useEffect, useState } from "react";
import CartItemCard from "../components/CartItemCard";
import AppBar from "../components/AppBar";
import { useTotalCartPrice } from "../hooks/useTotalCartPrice";

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
      <div className="w-full h-screen flex justify-center items-center">
        Loading Cart......!
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
          <div className="col-span-2 flex justify-center p-3">
            {/* <div className="border-l h-full w-1"></div> */}
            <div className="w-96 h-[30rem] p-2 pt-4 bg-white border-l border-t rounded-sm">
              <div>
                <h5 className="text-sm font-semibold text-gray-400 ms-3">
                  CUPONS
                </h5>
                <div className="flex justify-between p-3">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 pt-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6h.008v.008H6V6Z"
                      />
                    </svg>

                    <h4 className="ms-2 font-semibold text-sm">
                      Applay Coupons
                    </h4>
                  </div>
                  <div className="h-7 w-16 rounded-sm border-rose-500 text-rose-500  border flex items-center justify-center text-sm">
                    APPLY
                  </div>
                </div>
                <hr className="ms-2" />
                <div>
                  <div className="grid grid-cols-2 font-serif text-sm gap-2 pt-4 px-4">
                    <p>Totla MRP</p>
                    <p className="text-end">${totalMrp}</p>
                    <p>Discount on MRP</p>
                    <p className="text-end text-green-600">+${totalMrp - totalPrice}</p>
                    <p>Shipping Fee</p>
                    <p className="text-end">$4</p>
                  </div>
                  <div className="flex justify-between font-serif font-semibold border-t mt-3 border-b p-3">
                    <p>Total Amount</p>
                    <p>${totalMrp}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
