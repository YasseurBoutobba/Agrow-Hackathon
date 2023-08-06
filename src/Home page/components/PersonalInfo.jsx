import React from 'react'
import pfp from "../../assets/images/pfp.png";


const PersonalInfo = () => {
    
    return (
    <div className="flex items-center flex-shrink-0">
            <div className="flex flex-col relative ">
              <h4 className=" text-primary font-semibold pl-8 py-2">Personal Details</h4>
              <div className="flex">
                <div className="relative">
                  <img src={pfp} alt="Profile" className="" />
                  <div className=" cursor-default rounded-3xl absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[80%] h-[15%] bg-beige opacity-75 text-black text-center flex items-center justify-center">
                    <p>Verification photo</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-col justify-between h-[70%]">
                <div className="flex flex-col">
                    <p className=" text-gray-500 font-semibold">Name</p>
                    <p className="font-semibold">Yasser Boutabba</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-gray-500 font-semibold">Gender</p>
                    <p className="font-semibold">Male</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-gray-500 font-semibold">Date of Birth</p>
                    <p className="font-semibold">August 27th, 1999</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-gray-500 font-semibold">Nationality</p>
                    <p  className="font-semibold">Algerian</p>
                </div>

            </div>
          </div>
  )
}

export default PersonalInfo