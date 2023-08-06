import React from "react";
import post from "../assets/images/newpost.png";
const NewPost = ({ index }) => {
  if (index === 3) {
    return (
      <div className="flex gap-8 basis-[77%] rounded-2xl bg-white p-8">
        <div className="flex flex-col w-[40%] gap-3">
          <h4 className=" text-primary font-semibold">
            Project Details
          </h4>

          <img src={post} alt="" className="" />

          <h4 className=" text-primary font-semibold">Project Name</h4>
          <p> Project Name </p>

          <h4 className=" text-primary font-semibold">Project Description</h4>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Post description"
            className="border border-r-gray-300 rounded-xl resize-none shadow-md p-4"
          ></textarea>
        </div>

        <div className="flex flex-col gap-8 flex-shrink-0 min-w-max">
          <div className="flex flex-col gap-8 px-10 py-4 flex-shrink-0">
            <div className="flex items-center gap-4 flex-shrink-0">
              <h4 className=" text-primary font-semibold ">Address</h4>
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

            <div className="flex flex-col">
              <h4 className=" text-primary font-semibold">
                {" "}
                Min price to contibute{" "}
              </h4>
              <p> 30000 DA </p>
            </div>
            <div className="flex gap-6 items-center">
              <button
                className="text-cred font-semibold rounded-2xl py-2"
                onClick={() => onClick(true)}
              >
                Cancel
              </button>

              <button
                className="text-callgreen font-semibold bg-fadegreen rounded-2xl py-2 px-3"
                onClick={() => onClick(true)}
              >
                Add post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};
export default NewPost;
