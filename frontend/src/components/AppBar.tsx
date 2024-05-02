import { Link } from "react-router-dom"

const AppBar = () => {


    return (

    <div>
    <div className='h-20 mb-16 z-30 fixed bg-white  w-full flex top-0 shadow-lg border-black '>
      <nav className='flex justify-between w-full'>
        <div className="flex items-center ml-14">
        <img className="h-14 " src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-2709168-2249158.png?f=webp" alt="" />
        </div>
        <div className='flex font-sans text-sm font-semibold text-gray-700 tracking-wide'> 
            <div className="hover:bg-red-300 flex items-center">
              <a className="px-4" href=""> MEN </a>
            </div>
            <div className="flex items-center">
              <a className="px-4" href=""> WOMEN </a>
            </div>
            <div className="flex items-center">
              <a className="px-4" href=""> KIDS </a>
            </div>
            <div className="[word-spacing:-px] text-nowrap flex items-center">
              <a className="px-4" href=""> HOME & LIVING </a>
            </div>
            <div className="flex items-center">
              <a className="px-4" href=""> BEAUTY </a>
            </div>  
        </div>

        <div className="flex h-10 mt-4">
          <div className="flex border-gray-300 bg-gray-200 rounded-md w-[450px]">
            <div className="flex-col justify-center flex text-gray-500 pl-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>

            <input className='h-10  bg-gray-200 w-full rounded-md font-serif outline-none  p-3' placeholder="serach for products" type="text" />
          </div>
          </div>
          <div className="flex gap-4 items-center pe-9">
            <div className="cursor-pointer">
              <Link to={"/profile"}>
              <div className="pl-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              </div>
              <p className="text-xs">Profile</p>
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link to={"/wishlist"}>
                <div className="pl-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  </div>
                  <div className="text-xs">Wishlist</div>
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link to={"/cart"}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <div className="text-xs">Cart</div>
              </Link>
            </div>
          </div>
        
      </nav>
    </div>
 


</div>
  )
}

export default AppBar

