
const AppBar = () => {

    return (

    <div>
    <div className='h-20 fixed bg-gray-200 opacity-40 w-full flex border-b-2 border-black items-center justify-center'>
      <nav className='flex gap-4 justify-center items-center m-2'>
        <ul className='flex gap-5'> 
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>  
        </ul>
      </nav>
        <input className='h-10 w-72 rounded-3xl outline-2 outline-blue-500 focus:border-blue-500 focus:outline-blue-500  transition-all focus: duration-500 focus:w-3/4 p-3' placeholder="serach for products" type="text" />
    </div>
 


</div>
  )
}

export default AppBar

