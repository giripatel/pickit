import Alert from "./Alert";

const Card = ({
  image,
  price,
  brand,
  description,
  mrp,
  onClick,
  addToCart,
}: {
  image       : string;
  price       : number;
  brand       : string,
  description : string,
  mrp         : number,
  onClick     : () => void
  addToCart   : () => void
}) => {

  return (
    <div>
      <div className="group my-3 flex w-80 flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
        <a className="relative flex h-60 overflow-hidden" href="#">
          <img
            // className="absolute top-0 right-0 w-full h-full object-cover"
            className=" h-full m-auto object-cover"
            src={image}
            alt="product image"
          />
          <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
            <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
            <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
            <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
          </div>
          <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
            <button
              onClick={onClick}
              className="flex  active:bg-red-400 h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </a>
        <div className="mt-4 px-5 pb-5 h-full">
          <div className="font-semibold text-lg">
            {brand}
          </div>
          <a href="#">
            <h5 className="text-md tracking-tight text-slate-900">
              {description.length < 35? description : description.substring(0,35)+"..."}
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-xl font-semibold text-slate-900">
                ${price}
              </span>
              <span className="text-sm text-slate-900 line-through ml-2">
                ${mrp}
              </span>
            </p>
          </div>
          {/* <button 
          onClick={addToCart}
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
          <Alert onClick={addToCart} description={description}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
