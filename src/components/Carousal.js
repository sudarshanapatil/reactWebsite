import React from 'react';
import { Carousel } from 'react-bootstrap';

const stylesheet = {
  "img-carousel": {
    width: "85vw",
    height: "60vh"
  }
}

const data = [
  {
    key: 1,
    imagePath: require('../images/P1.jpg')
  },
  {
    key: 2,
    imagePath: require('../images/P2.jpg')
  },
  {
    key: 3,
    imagePath: require('../images/P3.jpg')
  }
]

function CarousalHome() {
  return (
    <Carousel>
      {
        data.map(ele => {
          return (<Carousel.Item key={ele.key}>
            <img 
              style={stylesheet["img-carousel"]}
              src={ele.imagePath}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>)
        })
      }
    </Carousel>
  );
}

export default CarousalHome;
