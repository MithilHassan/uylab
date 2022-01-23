import { Link } from "react-router-dom";

export const NavMenu = () => {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/our-courses">Our Courses</Link>
      </li>
      <li>
        <Link to="/admission-form">Admission Form</Link>
      </li>
      <li>
        <Link to="/verify">Verify</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
};
export const SearchMenu = () => {
  return (
    <>
      <li>
        <Link to="/">OFFLINE COURSES</Link>
      </li>
      <li>
        <Link to="/">ONLINE COURSES</Link>
      </li>
      <li>
        <Link to="/">PRE-RECORDED COURSES</Link>
      </li>
      <li>
        <Link to="/">TRAINING WITH BITM</Link>
      </li>
      <li>
        <Link to="/">TRAINING WITH PSKF</Link>
      </li>
    </>
  );
};
