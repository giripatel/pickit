import Alert from "./Alert";


interface WishList{
  // product :{
    id: number,
    brand: string,
    description: string,
    mrp: number,
    url: string[],
    currentPrice: number
    // }
}


const WishListCard = ({
    product,
    onClick,
  }: {
      product: WishList,
      onClick : () => void
  }
  ) => {

//   const wishlist  =  useRecoilStateLoadable(wishListAtom)




return (
  <div>
    <div className="group my-3 flex w-80 flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
      <a className="relative flex h-60 overflow-hidden" href="#">
        <img
          className="absolute top-0 right-0 h-full object-cover"
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
        {/* <button 
        onClick={onClick}
        className="flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Add to cart
        </button> */}
        <Alert onClick={onClick}/>
      </div>
    </div>
  </div>
);
  
}

export default WishListCard
  