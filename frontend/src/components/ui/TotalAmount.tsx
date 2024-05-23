import React from 'react'

const TotalAmount = ({
    totalMrp,
    totalPrice
} : {
    totalMrp :number,
    totalPrice : number
}) => {
  return (
    <div>
        <div className="flex justify-center p-3">
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
                    <p>${totalPrice}</p>
                  </div>
                </div>
                <div className='w-full h-10 bg-rose-500 rounded-sm flex justify-center items-center font-semibold text-sm mt-3 text-white cursor-pointer'>PLACE ORDER</div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default TotalAmount


export const TotalAmountSkeleton = () => {
  return (
    <div>
        <div className="flex justify-center p-3 animate-pulse">
            <div className="w-96 h-[30rem] p-2 pt-4 bg-white border-l border-t rounded-sm">
              <div>
                <div className='text-sm font-semibold text-gray-400 h-5 bg-gray-300 w-16 rounded-xl ms-3'></div>
                <div className="flex justify-between h-10 my-2 rounded-xl bg-gray-300 p-3"></div>
                <hr className="ms-2" />
                <div>
                  <div className="grid grid-cols-2 bg-gray-300 font-serif h-24 rounded-xl text-sm gap-2 pt-4 px-4"></div>
                  <div className="flex justify-between font-serif h-12 rounded-xl bg-gray-300 font-semibold border-t mt-3 border-b p-3"></div>
                </div>
                <div className='w-full h-10 bg-gray-300 rounded-lg flex justify-center items-center font-semibold text-sm mt-3 text-white cursor-pointer'></div>
              </div>
            </div>
          </div>
    </div>
  )
}


  
