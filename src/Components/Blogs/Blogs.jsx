import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // fetching data from the API or data base
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data)); // setting data to setBlogs in useState
  }, []);

  return <div></div>;
};

export default Blogs;
