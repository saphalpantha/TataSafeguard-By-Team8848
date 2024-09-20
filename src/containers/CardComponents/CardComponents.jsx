/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import './CardComponents.css';

function CardComponents() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="card">
              <div className="images-container">
                <img src={d.img} alt="" className="avatar" />
              </div>

              <div className="content">
                <p>{d.name}</p>
                <p>{d.review}</p>
                <button type="button" className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: 'John Morgan',
    img: '/students/John_Morgan.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Ellie Anderson',
    img: '/students/Ellie_Anderson.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Nia Adebayo',
    img: '/students/Nia_Adebayo.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Rigo Louie',
    img: '/students/Rigo_Louie.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Mia Williams',
    img: '/students/Mia_Williams.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

];

export default CardComponents;
