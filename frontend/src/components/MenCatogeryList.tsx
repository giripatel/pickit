import React from 'react'

const MenCatogeryList = () => {

    return (
        <div className="relative -left-6">
          <div className="absolute w-[50rem] h-[25rem] -left-16 top-10 bg-white grid grid-cols-4 shadow-md ">
            <div className="h-full flex flex-col gap-2 py-5  px-3">
                <div className='font-semibold text-sm text-rose-500'>Top ware</div> 
                <ul className='text-sm'>
                  <li className='hover:font-bold'>T-Shirts</li>
                  <li className='hover:font-bold'>Casual Shirts</li>
                  <li className='hover:font-bold'>Formal Shirts</li>
                  <li className='hover:font-bold'>Sweatshirts</li>
                  <li className='hover:font-bold'>Sweaters</li>
                  <li className='hover:font-bold'>Jackets</li>
                  <li className='hover:font-bold'>Blazers & Coats</li>
                  <li className='hover:font-bold'>Suits</li>
                  <li className='hover:font-bold'>Rain Jackets</li>
                </ul>
            </div>
            <div className='h-full bg-slate-100 py-5  px-3 flex flex-col gap-2 '>
                <div className=" text-sm font-semibold text-rose-500">Bottom ware</div>
                <ul className='text-sm flex flex-col gap-1'>
                  <li className='hover:font-bold'>Jeans</li>
                  <li className='hover:font-bold'>Casual Trousers</li>
                  <li className='hover:font-bold'>Formal Trousers</li>
                  <li className='hover:font-bold'>Shorts</li>
                  <li className='hover:font-bold'>Track Pants & Joggers</li>  
                </ul> 
            </div>
            <div className='h-full py-5  px-3 flex flex-col gap-2'>
                <div className="text-sm font-semibold text-rose-500">Footware</div> 
                <ul className='text-sm flex flex-col gap-1'>
                  <li className='hover:font-bold'>Casual Shoes</li>
                  <li className='hover:font-bold'>Sports Shoes</li>
                  <li className='hover:font-bold'>Formal Shoes</li>
                  <li className='hover:font-bold'>Sneakers</li>
                  <li className='hover:font-bold'>Sandals & Floaters</li>
                  <li className='hover:font-bold'>Flip Flops</li>
                  <li className='hover:font-bold'>Socks</li>
                </ul>
            </div>
            <div className='h-full bg-slate-100 py-5  px-2 text-sm flex flex-col gap-2'>
                <div className="text-sm font-semibold text-rose-500">Innerwear & Sleepwear</div> 
                <ul className='text-sm flex flex-col gap-1'>
                  <li className='hover:font-bold'>Briefs & Trunks</li>
                  <li className='hover:font-bold'>Boxers</li>
                  <li className='hover:font-bold'>Vests</li>
                  <li className='hover:font-bold'>Sleepwear & Loungewear</li>
                  <li className='hover:font-bold'>Thermals</li>
                </ul>
            </div>
          </div>
        </div>
      )
}

export default MenCatogeryList
