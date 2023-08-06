import React from "react";
import backarrow from "../assets/icons/backarrow.svg";
import PersonalInfo from "./components/PersonalInfo";
import AddressInfo from "./components/AddressInfo";
import ContactInfo from "./components/ContactInfo";

const Home = ({ index }) => {
  if (index === 1) {
    return (
      <div className="flex flex-col basis-[77%] rounded-2xl bg-white p-6">
        <h3 className="flex gap-2.5 items-center cursor-pointer">
          {" "}
          <img src={backarrow} alt="" />{" "}
          <span className=" text-nightblue font-semibold">Back</span>{" "}
        </h3>

        <div className="flex flex-col ">
          <PersonalInfo />
          <div className="flex w-[56%] gap-3 flex-shrink-0">
            <AddressInfo />
            <ContactInfo />
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default Home;
