import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img width={420} height={700}
          className="d-block w-100"
          src="./img/v.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>«Посмотри на мир. Он куда удивительнее cнов»</h3>
          <p>Рэй Брэдберри</p>
          <Link exact to={'/form'}>
          <Button variant="primary">
            Обратная связь 
          </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={420} height={700}
          className="d-block w-100"
          src="./img/s.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>«Путешествия лишают тебя дара речи, а потом превращают в лучшего рассказчика»</h3>
          <p>Ибн Баттута</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={420} height={700}
          className="d-block w-100"
          src="./img/pus.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>«Путешествовать – значит развиваться»</h3>
          <p>Пьер Бернандо</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider