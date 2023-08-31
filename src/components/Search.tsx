import React, { ChangeEvent } from "react";
import { CategoryType } from "@/types";

interface SearchProps {
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSearch: () => void;
  categoryList: CategoryType[];
}

const Search: React.FC<SearchProps> = ({
  handleChange,
  handleSearch,
  categoryList,
}) => (
  <div className="flex justify-between w-1/2 items-center p-2 px-6 bg-gray-400 rounded-md">
    <div>
      <input
        placeholder="Search by name"
        onChange={handleChange}
        name="keyword"
        className="outline-none rounded-sm"
      />
    </div>
    <div>
      <select name="category" onChange={handleChange} className="outline-none">
        {categoryList.map((category) => (
          <option value={category.slug} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
    <button
      onClick={handleSearch}
      className="bg-teal-500 text-white px-4 py-2 rounded-md"
    >
      Search
    </button>
  </div>
);

export default Search;
