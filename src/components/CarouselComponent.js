import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const items = [
   /* {
      src: 'assets/images/scott-c-new.jpg',
      altText: 'office 1',
      caption: 'gjh',
      
    },
    {
      src: 'assets/images/workspace-ch.jpg',
      altText: 'office 2',
      caption: 'Freedom Isn\'t Free'
    },
    {
      src: 'assets/images/dogs_workplace.jpg',
      altText: 'office 3',
      caption: 'fdf'
    },*/
    {
      src: 'assets/images/home-page - Copy.jpg',
      altText: 'office 4',
      caption: 'fdhjh'
    }
    

  ];


  export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
      };
      return (
        <div>
          
          <Slider {...settings}>
              {items.map(item =>(
                  <div><img className= 'slick-img' src ={item.src} alt={item.altText}/>

                  </div>
              )
              )}
            
          </Slider>
        </div>
      );
    }
  }