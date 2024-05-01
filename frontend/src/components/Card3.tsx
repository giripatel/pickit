// import React from 'react'

const Card2 = ({image, price} : {image : string, price : number}) => {
  return (
    <div className='border-0 hover:text-blue-400 p-2 border-gray-500 hover:shadow-lg hover:scale-105 transition-all  rounded-lg w-72 h-72'>
        <img className='rounded-sm'  src={image} alt="car" />
        <div className="font-normal">
        <div className="hover:text-blue-400 font-light text-sm mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dolores?
        </div>
        $ {price}

        </div>
    </div>
  )
}

export default Card2
