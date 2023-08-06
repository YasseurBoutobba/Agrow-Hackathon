import React, { useState } from "react";
import { posts } from "./content/posts";
import Post from "./components/Post";
import PostModal from "../Home page/components/PostModal";

const Feed = ({ index }) => {
  const [modalOpen, setModalOpen] = useState(false);

  if (index === 0) {
    return (
      <div className="flex flex-col basis-[77%] rounded-2xl bg-white p-8">
        <div className="flex flex-wrap gap-[3rem] ">
          {posts.map((el, index) => (
            <>
              <Post post={el} setModalOpen={setModalOpen} />
              {modalOpen && <PostModal setOpenModal={setModalOpen} post={el}/>}
            </>
          ))}
        </div>
      </div>
    );
  } else return null;
};

export default Feed;
