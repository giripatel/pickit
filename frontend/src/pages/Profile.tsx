import React, { useState } from 'react'
import AppBar from '../components/AppBar'

const Profile = () => {
    const [profile,setProfile] = useState({
        fistName : "giri patel",
        mobileNumber : "7984930028",
        emailId : "",
        gender : "male",
        dateOfBirth : "",
        location : "",  
        alterNateMobile : "",
        hintName : ""
    })

  return (
    <div>
      <AppBar/>
      <div className='w-full h-screen flex justify-center items-center mt-7'>
        <div className='border-[0.5px] w-[38rem] border-gray-300 h-[35rem] flex justify-center items-center'>
            <div className='flex flex-col gap-8'>
                <div className=' flex flex-col gap-y-4'>
                    <h3 className='text-lg font-semibold'>Profile Details</h3>
                    <hr className='w-72'/>
                </div>
                <div className='text-gray-600 grid grid-cols-2 gap-4 font-serif px-2'>

                    <div>Full Name</div>
                    <div>{profile.fistName? profile.fistName : "-not added-"}</div>
                    <div>Mobile Number</div>
                    <div>{profile.mobileNumber? profile.mobileNumber : "-not added-"}</div>
                    <div>Email Id</div>
                    <div>{profile.emailId? profile.emailId : "-not added-"}</div>
                    <div>Gender</div>
                    <div>{profile.gender? (profile.gender).toUpperCase() : "-not added-"}</div>
                    <div>Date of Birth</div>
                    <div>{profile.dateOfBirth? profile.dateOfBirth : "-not added-"}</div>
                    <div>Location</div>
                    <div>{profile.location? profile.location : "-not added-"}</div>
                    <div>Alternate Mobile</div>
                    <div>{profile.alterNateMobile? profile.alterNateMobile : "-not added-"}</div>
                    <div>Hint Name</div>
                    <div>{profile.hintName? profile.hintName : "-not added-"}</div>
                    
                </div>
                <div>
                    <div className='w-60 h-12  bg-rose-500 flex justify-center items-center text-white text-sm font-semibold rounded-sm'>
                          EDIT
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
