import React, { useState, useEffect } from "react";
import { PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

export default function AllPosts() {
  const authStatus = useSelector((state) => state.auth.status);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  
  return authStatus ? (
    <div className=" w-full flex justify-center">
      <div className="mx-auto px-4 mt-8 grid  auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-screen-2xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {posts.map((post) => (
          <div key={post.$id}>
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className=" w-full flex justify-center">
      <div className="p-10 text-3xl text-white">Login to read posts</div>
    </div>
  );
}
