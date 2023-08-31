import Image from "next/image";
import React from "react";
import { BlogType } from "@/types";
import AvatarIcon from "@/images/avatar.png";

interface BlogProps {
  blog: BlogType;
  categories: (string | undefined)[];
}

const Blog: React.FC<BlogProps> = ({ blog, categories }) => (
  <div className="flex flex-col gap-4 rounded-md shadow-md pb-4 cursor-pointer transition-transform duration-500 hover:transform hover:-translate-y-2">
    <img
      src={blog.imageUrl}
      alt="img"
      width={36}
      height={36}
      className="w-full h-1/2 rounded-t-md"
    />
    <div className="flex flex-col mx-8 pr-8 justify-between h-full">
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          {categories.map((item) => (
            <span key={item} className="text-blue-500">
              {item}
            </span>
          ))}
        </div>
        <div className="text-xl font-semibold">{blog.title}</div>
        <div className="text-gray-400">{blog.excerpt}</div>
      </div>
      <div className="flex gap-2">
        <Image
          src={AvatarIcon}
          width={64}
          height={64}
          alt="avatar"
          className="w-9 h-9"
        />
        <div className="flex flex-col">
          <span>Roel Aufderehar</span>
          <span className="text-gray-400">Mar 16, 2020 ∙ 6 min read</span>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
