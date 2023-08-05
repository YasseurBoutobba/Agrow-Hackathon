import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 px-10 py-4 ">
        <h4 className=" text-primary font-semibold ">Contact Details</h4>

        <div className="flex flex-col justify-between gap-5">
          <div className="flex flex-col  gap-1">
            <p className=" text-gray-500 font-semibold">Phone Number</p>
            <p className="font-semibold">+213-55-78-63-631</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-gray-500 font-semibold">Email</p>
            <p className="font-semibold">blabla@me.com</p>
          </div>
        </div>
      </div>

    {/* Account role */}
      <div className="flex flex-col gap-2 px-10 py-4 ">
        <h4 className=" text-primary font-semibold ">Account Role</h4>
        <p className="font-semibold">Farmer</p>

        <div className="flex flex-col justify-between gap-5">
          
        </div>
      </div>


    </div>
  );
};

export default ContactInfo;
