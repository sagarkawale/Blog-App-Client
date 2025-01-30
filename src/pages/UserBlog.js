import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

const UserBlog = () => {
  const [blogs, setBlogs] = useState([]);

  // get user blog
  const getUserBlog = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(
        `https://blog-app-server-8j83.onrender.com/api/v1/blog/user-blog/${id}`
      );
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserBlog();
    console.log(blogs);
  }, []);
  return (
    <div>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            id={blog?._id}
            isUser={true}
            title={blog?.title}
            description={blog?.description}
            image={blog?.image}
            username={blog?.user?.username}
            time={blog.createdAt}
          />
        ))
      ) : (
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1>You Haven't Created Block</h1>
        </div>
      )}
    </div>
  );
};

export default UserBlog;
