import React from "react";
import { Container, PostForm } from "../components";
import { useSelector } from "react-redux";

function AddPost() {
  const authstatus = useSelector((state) => state.auth.status);
  if (authstatus) {
    return (
      <div className="py-8 flex items-center justify-center">
        <Container>
          <PostForm />
        </Container>
      </div>
    );
  } else
    return (
      <div className=" w-full flex justify-center">
        <div className="p-10 text-3xl text-white">Login to read posts</div>
      </div>
    );
}

export default AddPost;
