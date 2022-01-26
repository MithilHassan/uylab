import { Link } from "react-router-dom";

export const NavMenu = () => {
  return (
    <>
      <Link to="/">
        <li>Home</li>
      </Link>

      <Link to="/our-courses">
        <li>Our Courses</li>
      </Link>

      <Link to="/admission-form">
        <li>Admission Form</li>
      </Link>

      <Link to="/verify">
        <li>Verify</li>
      </Link>

      <Link to="/blog">
        <li>Blog</li>
      </Link>

      <Link to="/cart">
        <li>Cart</li>
      </Link>

      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </>
  );
};
export const SearchMenu = () => {
  return (
    <>
      <Link to="/">
        <li>OFFLINE COURSES</li>
      </Link>

      <Link to="/">
        <li>ONLINE COURSES</li>
      </Link>

      <Link to="/">
        <li>PRE-RECORDED COURSES</li>
      </Link>

      <Link to="/">
        <li>TRAINING WITH BITM</li>
      </Link>

      <Link to="/">
        <li>TRAINING WITH PSKF</li>
      </Link>
    </>
  );
};
