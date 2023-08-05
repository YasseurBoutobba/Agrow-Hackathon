import React from "react";
import profile from "../assets/images/avatar.png";
import downarrow from "../assets/icons/downarrow.svg";

const Profile = () => {
  return (
    <div className="flex justify-between w-[85%] min-h-max items-center gap-3 basis-[20%]">
      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover cursor-pointer"
        />
      </div>

      <div className="flex flex-col flex-shrink-0 justify-between">
        <h4 className=" text-nightblue font-semibold">Imed Bousakhria</h4>
        <small className="font-light">Farmer</small>
      </div>

      <img src={downarrow} alt="" className="cursor-pointer" />
    </div>
  );
};

export default Profile;
