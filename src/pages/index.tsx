import { GetServerSideProps, GetStaticPaths, NextPage } from "next";

interface HomePageProps {
  blogList: [];
  keyword: string;
  filter: boolean;
}

const HomePage: NextPage = () => {
  return <div></div>;
};

const getServerSideProps: GetServerSideProps = async (context) => {
  const { keyword, filter } = context.query;
  let blogList = [];
  try {
    const response = await fetch(`${process.env.BASE_URL}/blog-list`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        keyword,
        filter,
      }),
    });
    const data = await response.json();
    blogList = data.blogList;
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      blogList,
      keyword,
      filter,
    },
  };
};

export default HomePage;
