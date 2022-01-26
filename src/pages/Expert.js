import { Section, SliderCard } from "../components/Styles/Styles";
import Slider from "react-slick";
import React, { Component } from "react";
import caretRight from "../components/img/caret-right.png";
import caretLeft from "../components/img/caret-left.png";
import img1 from "../components/img/experts/1.jpg";
import img2 from "../components/img/experts/2.jpg";
import img3 from "../components/img/experts/3.jpg";
import img4 from "../components/img/experts/4.jpg";
import img5 from "../components/img/experts/5.jpg";
import star from "../components/img/course/icons/5star.png";
export default class Expert extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      autoplay: true,
      pauseOnHover: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <img src={caretRight} />,
      prevArrow: <img src={caretLeft} />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Section>
        <SliderCard>
          <Slider {...settings}>
            <div className="card">
              <div className="img">
                <img src={img2} alt="img" />
              </div>
              <p>Md Shahadat Hossain</p>
              <img className="rating" src={star} alt="icon" />
              <span>4 Reviews</span>
            </div>
            <div className="card">
              <div className="img">
                <img src={img3} alt="img" />
              </div>
              <p>Ashraful Islam</p>
              <img className="rating" src={star} alt="icon" />
              <span>2 Reviews</span>
            </div>
            <div className="card">
              <div className="img">
                <img src={img1} alt="img" />
              </div>
              <p>Rasel Islam</p>
              <img className="rating" src={star} alt="icon" />
              <span>1 Reviews</span>
            </div>
            <div className="card">
              <div className="img">
                <img src={img4} alt="img" />
              </div>
              <p>Syed Mushfiqur Rahman</p>
              <img className="rating" src={star} alt="icon" />
              <span>1 Reviews</span>
            </div>
            <div className="card">
              <div className="img">
                <img src={img5} alt="img" />
              </div>
              <p>Jahi Islam</p>
              <img className="rating" src={star} alt="icon" />
              <span>1 Reviews</span>
            </div>
          </Slider>
        </SliderCard>
      </Section>
    );
  }
}
