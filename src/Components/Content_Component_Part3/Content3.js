import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './content3.css'

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <h2>Our Destinations</h2>
        <Slider {...settings}>
          <div className="card1">
            <img className="card1-image1" src="https://res.cloudinary.com/draisdub8/image/upload/v1693721338/Payinstacardassignment/card-image_1_k71vca.jpg"/>
            <h3>Harvard University</h3>
            <p>Cambridge, Massachusetts, UK</p>
            <img src="https://res.cloudinary.com/draisdub8/image/upload/v1693723894/Payinstacardassignment/Icons_kcieff.png"/>
          </div>
          <div className="card2">
          <img className="card1-image2" src="https://res.cloudinary.com/draisdub8/image/upload/v1693721773/Payinstacardassignment/card-image_2_frrpdm.jpg"/>
            <h3>Oxford University</h3>
            <p>Oxford, England</p>
            <img src="https://res.cloudinary.com/draisdub8/image/upload/v1693723894/Payinstacardassignment/Icons_kcieff.png"/>
          </div>
          <div className="card3">
          <img className="card1-image3" src="https://res.cloudinary.com/draisdub8/image/upload/v1693721795/Payinstacardassignment/card-image_3_djmysd.jpg"/>
            <h3>Stanford University</h3>
            <p>Stanford, California</p>
            <img src="https://res.cloudinary.com/draisdub8/image/upload/v1693723894/Payinstacardassignment/Icons_kcieff.png"/>
          </div>
          <div className="card4">
          <img className="card1-image4" src="https://res.cloudinary.com/draisdub8/image/upload/v1693721338/Payinstacardassignment/card-image_1_k71vca.jpg"/>
            <h3>Harvard University</h3>
            <p>Cambridge, Massachusetts, UK</p>
            <img src="https://res.cloudinary.com/draisdub8/image/upload/v1693723894/Payinstacardassignment/Icons_kcieff.png"/>
          </div>
          <div className="card5">
          <img className="card1-image2" src="https://res.cloudinary.com/draisdub8/image/upload/v1693721773/Payinstacardassignment/card-image_2_frrpdm.jpg"/>
            <h3>Oxford University</h3>
            <p>Oxford, England</p>
            <img src="https://res.cloudinary.com/draisdub8/image/upload/v1693723894/Payinstacardassignment/Icons_kcieff.png"/>
          </div>
          <div className="card1">
          <img className="card1-image3" src="https://res.cloudinary.com/draisdub8/image/upload/v1693721795/Payinstacardassignment/card-image_3_djmysd.jpg"/>
            <h3>Stanford University</h3>
            <p>Stanford, California</p>
            <img src="https://res.cloudinary.com/draisdub8/image/upload/v1693723894/Payinstacardassignment/Icons_kcieff.png"/>
          </div>
          <div className="card1">
          <img className="card1-image2" src="https://res.cloudinary.com/draisdub8/image/upload/v1693721773/Payinstacardassignment/card-image_2_frrpdm.jpg"/>
            <h3>Oxford University</h3>
            <p>Oxford, England</p>
            <img src="https://res.cloudinary.com/draisdub8/image/upload/v1693723894/Payinstacardassignment/Icons_kcieff.png"/>
          </div>
          
          
        </Slider>
      </div>
    );
  }
}