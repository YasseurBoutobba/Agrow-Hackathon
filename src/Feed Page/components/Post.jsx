import React from "react";
import pfpplaceholder from "../../assets/images/pfpplaceholder.png";
import amizour from "../../assets/pictures/amizour.png";
import Contribute from "./Contribute";

const Post = ({post, setModalOpen}) => {
  return (
    <div className="flex flex-col gap-5 basis-[40%] bg-postbg border border-gray-300 rounded-xl p-5">
      <div className="flex w-full justify-between items-center flex-shrink-0">
        <div className="flex gap-3 items-center">
          <img src={pfpplaceholder} alt="" />
          <div className="flex flex-col">
            {" "}
            <h4 className="font-semibold">{post.poster}</h4>
            <div className="flex gap-3 items-center">
              <h3 className=" text-gray-600">{post.role}</h3>{" "}
              <span className="bg-gray-100 px-1.5 py-1 rounded-md border text-gray-500 text-xs min-h-max flex-shrink-0">{post.type}</span>{" "}
            </div>
          </div>
        </div>
        <div className=" font-semibold text-primary cursor-pointer">Follow</div>
      </div>
      <p className="text-sm">{post.description}</p>

      <img src={amizour} alt="" />
      <Contribute onClick={setModalOpen} />
    </div>
  );
};

export default Post;
