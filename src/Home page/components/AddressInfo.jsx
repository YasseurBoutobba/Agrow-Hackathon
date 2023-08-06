import React from "react";
import edit from "../../assets/icons/edit.svg";

const AddressInfo = () => {
  return (
    <div className="flex flex-col gap-2 px-10 py-4 flex-shrink-0">
      <div className="flex items-center gap-4 flex-shrink-0">
        <h4 className=" text-primary font-semibold ">Address</h4>
        <img src={edit} alt="" className=" w-4 cursor-pointer" />
      </div>
      <div className="flex flex-col justify-between gap-5">
        <div className="flex flex-col  gap-1">
          <p className=" text-gray-500 font-semibold">Address Line</p>
          <p className="font-semibold">No 35 Al Bahdja Street</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-gray-500 font-semibold">City</p>
          <p className="font-semibold">Tazougaght</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-gray-500 font-semibold">State</p>
          <p className="font-semibold">Khenchela</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-gray-500 font-semibold">Country</p>
          <p className="font-semibold">Algeria</p>
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
