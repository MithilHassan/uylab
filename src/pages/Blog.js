import { Container, Section } from "../components/Styles/Styles";
import { StyledBlog } from "../components/Styles/Blog.Styles";
import logo from "../components/img/blog/logo.png";
import img1 from "../components/img/blog/image1.jpg";
import img2 from "../components/img/blog/image2.jpg";
import img3 from "../components/img/blog/image3.jpg";
import { useState } from "react";

const BlogItem = () => {
  return [
    {
      img: img2,
      title: "Tex Mex Salad",
      date: "May 20, 2022",
    },
    {
      img: img1,
      title: "Healthy Breakfast Meals",
      date: "July 20, 2022",
    },
    {
      img: img3,
      title: "Better Sandwich",
      date: "June 20, 2022",
    },
  ];
};

const Blog = () => {
  const [blogs, setBlogs] = useState(BlogItem);
  return (
    <Section theme={{ bg: "#1B1464" }}>
      <StyledBlog>
        <div>
          <img height="200px" src={logo} alt="logo" />
          <h2>BLOG - UY LAB</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            eligendi vero voluptas recusandae hic ipsum commodi, earum illo
            nulla vel laborum quos labore architecto, animi inventore deleniti
            iste! Consectetur, perferendis.
          </p>
        </div>

        {blogs.map((blog) => (
          <div>
            <img height="200px" src={blog.img} alt="img" />
            <p>{blog.title}</p>
            <span>{blog.date}</span>
          </div>
        ))}
      </StyledBlog>
    </Section>
  );
};
export default Blog;
