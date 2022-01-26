import img1 from "../components/img/experts/1.jpg";
import img2 from "../components/img/experts/2.jpg";
import img3 from "../components/img/experts/3.jpg";
import img4 from "../components/img/experts/4.jpg";
import img5 from "../components/img/experts/5.jpg";
import star from "../components/img/course/icons/5star.png";
const ExpertsApi = () => {
  return [
    {
      img: img2,
      name: "Md Shahadat Hossain",
      rating: star,
      review: 4,
    },
    {
      img: img3,
      name: "Ashraful Islam",
      rating: star,
      review: 2,
    },
    {
      img: img1,
      name: "Rasel Islam",
      rating: star,
      review: 1,
    },
    {
      img: img4,
      name: "Syed Mushfiqur Rahman",
      rating: star,
      review: 1,
    },
    {
      img: img5,
      name: "Jahi Islam",
      rating: star,
      review: 1,
    },
  ];
};
export default ExpertsApi;
