import React from "react";

interface Cart {
  product: {
    id: number;
    brand: string;
    description: string;
    mrp: number;
    url: string[];
    currentPrice: number;
  };
}

const CartItemCard = ({
  product,
//   removeItem,
}: 
   Cart
//   removeItem: () => void;
) => {
  return (
    <div>
      <div className="group my-3 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
        <a className="relative flex h-60 overflow-hidden" href="#">
          <img
            className="absolute top-0 right-0 h-full w-full object-cover"
            src={product.url[0]}
            alt="product image"
          />
          <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
            <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
            <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
            <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
          </div>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">
              {product.description}
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-xl font-semibold text-slate-900">
                ${product.currentPrice}
              </span>
              <span className="text-sm text-slate-900 line-through ml-2">
                $99
              </span>
            </p>
          </div>
          <button
            // onClick={removeItem}
            className="flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
