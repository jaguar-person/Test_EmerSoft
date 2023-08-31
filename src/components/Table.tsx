import React from "react";
import { BlogType, CategoryType } from "@/types";
import Blog from "./Blog";

interface TableProps {
  blogList: BlogType[];
  categoryList: CategoryType[];
}

const Table: React.FC<TableProps> = ({ blogList, categoryList }) => (
  <div className="px-3 w-full md:w-fit flex items-center justify-center mx-1 sm:mx-3 text-xs md:text-sm">
    <div className="container">
      <div className="grid grid-cols-3 gap-4">
        {blogList.length === 0 ? (
          <div className="text-center col-span-3 text-lg text-red-500">
            No Post!
          </div>
        ) : (
          blogList.map((blog) => {
            const categories = blog.categories.map((categoryId) => {
              return categoryList.find((item) => item.id === categoryId)?.name;
            });
            return <Blog key={blog.id} blog={blog} categories={categories} />;
          })
        )}
      </div>
    </div>
  </div>
);

export default Table;
