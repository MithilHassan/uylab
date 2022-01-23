import React, { Component } from "react";
import Slider from "react-slick";
import slider1 from "./img/slider1.jpg";
import slider2 from "./img/slider2.jpg";
import slider3 from "./img/slider3.jpg";
import slider4 from "./img/slider4.jpg";
import slider5 from "./img/slider5.jpg";
import slider6 from "./img/slider6.jpg";
import caretRight from "./img/caret-right.png";
import caretLeft from "./img/caret-left.png";
import {
  Section,
  Title,
  SubTitle,
  Line,
  SliderContainer,
} from "./Styles/Styles";

export default class Sliders extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      autoplay: true,
      pauseOnHover: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      centerMode: true,
      centerPadding: -30,
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
          breakpoint: 600,
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
        <Title center>Our Training Partner</Title>
        <Line />
        <SubTitle center>Find here our Training and Busines Partner</SubTitle>
        <SliderContainer>
          <Slider {...settings}>
            <div className="item">
              <img src={slider1} alt="brands" />
            </div>
            <div className="item">
              <img src={slider2} alt="brands" />
            </div>
            <div className="item">
              <img src={slider3} alt="brands" />
            </div>
            <div className="item">
              <img src={slider4} alt="brands" />
            </div>
            <div className="item">
              <img src={slider5} alt="brands" />
            </div>
            <div className="item">
              <img src={slider6} alt="brands" />
            </div>
          </Slider>
        </SliderContainer>
      </Section>
    );
  }
}
