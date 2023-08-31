import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useState, useEffect } from "react";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import Title from "@/components/Title";
import Search from "@/components/Search";
import { BlogType, CategoryType } from "@/types";
interface HomePageProps {
  blogList: BlogType[];
  categoryList: CategoryType[];
  keyword: string;
  filter: boolean;
}

const HomePage: NextPage<HomePageProps> = ({ blogList, categoryList }) => {
  const [currentState, setCurrentState] = useState({
    page: 0,
    keyword: "",
    category: "books",
  });
  const router = useRouter();

  useEffect(() => {
    router.push(
      `${router.pathname}?keyword=${currentState.keyword}&page=${currentState.page}&category=${currentState.category}`
    );
  }, []);

  const handlePage = (index: number) => {
    if (!(currentState.page === 0 && index < 0)) {
      setCurrentState({
        ...currentState,
        page: currentState.page + index,
      });
      router.push(
        `${router.pathname}?keyword=${currentState.keyword}&page=${
          currentState.page + index
        }&category=${currentState.category}`
      );
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCurrentState({
      ...currentState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    console.log(currentState.keyword, currentState.page, currentState.category);
    router.push(
      `${router.pathname}?keyword=${currentState.keyword}&page=${currentState.page}&category=${currentState.category}`
    );
  };

  return (
    <div className="w-full p-10 flex flex-col gap-8 items-center">
      <Title />
      <Search
        handleChange={handleChange}
        handleSearch={handleSearch}
        categoryList={categoryList}
      />
      <Table blogList={blogList} categoryList={categoryList} />
      <Pagination
        currentPage={currentState.page}
        handleCurrentPage={handlePage}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let blogList = [] as BlogType[];
  let categoryList = [] as CategoryType[];
  const { keyword, page, category } = context.query;
  try {
    const blogs = await fetch(
      `${process.env.BASE_URL}/api/blog-list?keyword=${keyword}&page=${page}&category=${category}`
    );
    blogList = await blogs.json();

    const categories = await fetch(`${process.env.BASE_URL}/api/category-list`);
    categoryList = await categories.json();
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      blogList,
      categoryList,
    },
  };
};

export default HomePage;
