import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.user);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="flex flex-col text-white">
      <div className="bg-gray-900/40 py-8">
        <div className="flex justify-between">
          <div className="px-4">
            <h1 className="text-4xl font-bold text-gray-100 mb-2">
              {post.title}
            </h1>
            <p className="text-gray-400">
              Published on {userData?.$createdAt.slice(0, 10) || "1 Aug, 2024"}
            </p>
          </div>
          <div className="w-auto">
            {isAuthor && (
              <div className="inline-flex items-center rounded-md shadow-sm">
                <div className="right-6 top-6">
                  <Link to={`/edit-post/${post.$id}`}>
                    <button className="text-slate-800 hover:text-blue-600 text-sm bg-gray-200/80 hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </span>
                      <span className="hidden md:inline-block">Edit</span>
                    </button>
                  </Link>
                  <button
                    onClick={deletePost}
                    className="text-slate-800 hover:text-blue-600 text-sm bg-gray-200/80 hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </span>
                    <span className="hidden md:inline-block">Delete</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray-200/70 text-black shadow-lg rounded-xl py-2 m-2">
        <div className="container mx-auto px-2 flex flex-col">
          <div className="w-auto flex flex-col">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="mb-8 w-full max-h-lg mx-auto rounded-xl"
            />
            <div className="prose max-w-none w-full text-xl">
              <div className="browser-css">{parse(post.content)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
