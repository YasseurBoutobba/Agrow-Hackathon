import React from "react";
import pfpplaceholder from "../../assets/images/pfpplaceholder.png";
import amizour from "../../assets/pictures/amizour.png";

const PostModal = ({ post, setModalOpen }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-10 flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[500px] min-h-max h-max flex flex-col gap-6 justify-center py-4 px-6 rounded-xl">
        <div className="flex w-full justify-between items-center flex-shrink-0">
          <div className="flex gap-3 items-center">
            <img src={pfpplaceholder} alt="" />
            <div className="flex flex-col">
              {" "}
              <h4 className="font-semibold">{post.poster}</h4>
              <div className="flex gap-3 items-center">
                <h3 className=" text-gray-600">{post.role}</h3>{" "}
                <span className="bg-gray-100 px-1.5 py-1 rounded-md border text-gray-500 text-xs min-h-max flex-shrink-0">
                  {post.type}
                </span>{" "}
              </div>
            </div>
          </div>
          <div className=" font-semibold text-primary cursor-pointer">
            Follow
          </div>
        </div>
        <p className="text-sm">{post.description}</p>

        <img src={amizour} alt="" />
        <div className="flex flex-col gap-2">
          {" "}
          <p>
            Min price to contribute:{" "}
            <span className="font-semibold text-primary"> 30000 DA </span>{" "}
          </p>
          <p>
            Project Location{" "}
            <span className="font-semibold text-primary"> Khenchela </span>{" "}
          </p>
        </div>

        <button
          className="text-white font-semibold bg-primary rounded-2xl py-2"
          onClick={() => setModalOpen(false)}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default PostModal;
