import React, { useState } from "react";
import edit from "../../assets/icons/edit.svg";
import EditModal from "./EditModal";

const ContactInfo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Farmer");

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 px-10 py-4 min-w-max">
        <div className="flex items-center gap-4 ">
          <h4 className=" text-primary font-semibold ">Contact Details</h4>
          <img src={edit} alt="" className=" w-4 cursor-pointer" />
        </div>
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
        <div className="flex items-center gap-4 flex-shrink-0">
          <h4 className=" text-primary font-semibold ">Account Role</h4>
          <img
            src={edit}
            alt=""
            className=" w-4 cursor-pointer"
            onClick={() => {
              setModalOpen(true);
            }}
          />
        </div>
        <p className="font-semibold">{ selectedRole }</p>

        {modalOpen && (
          <EditModal
            setOpenModal={setModalOpen}
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
          />
        )}

        <div className="flex flex-col justify-between gap-5"></div>
      </div>
    </div>
  );
};

export default ContactInfo;
