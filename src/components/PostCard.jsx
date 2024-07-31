import React from "react";
import appwritePostService from '../appwrite/config';
import { Link } from "react-router-dom";

export default function PostCard({
  $id = "",
  title = "Post Title",
  featuredImage = "66a51e3100122e112a69",
}) {
  return (
    <Link
      to={`/post/${$id}`}
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
    >
      <img
        src={appwritePostService.getFilePreview(featuredImage)}
        alt={title}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        <time dateTime="2023-10-11" className="mr-8">
          July 24, 2024
        </time>
        <div className="-ml-4 flex items-center gap-x-4">
          <svg
            viewBox="0 0 2 2"
            className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          <div className="flex gap-x-2.5">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt=""
              className="h-6 w-6 flex-none rounded-full bg-white/10"
            />
            Anmol
          </div>
        </div>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
        <span className="absolute inset-0" />
        {title}
      </h3>
    </Link>
  );
}
