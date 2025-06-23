 import { Carousel } from 'react-bootstrap';
// import image1 from './images/image1.jpg';
// import image2 from './images/image2.jpg';
// import image3 from './images/image3.jpg';
// import image4 from './images/image4.jpg';
// import image5 from './images/image5.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
 import croma from '../component/image/croma.webp';
 import watch1 from '../component/image/watch1.avif';
 import phone1 from '../component/image/phone1.avif';
 import summer from '../component/image/summer.avif';
 import speaker from '../component/image/speaker.avif';

function ImageSlider() {

    const imageStyle = {
    width: "100%",
    height: "450px",
    margin: "auto",
    marginTop: "8px",
    marginBottom:"20px",
  };


  return (

<Carousel interval={2500}>
      <Carousel.Item>
        <img
         style={imageStyle}
          //className="d-block w-100"
          src={croma}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageStyle}
          src={summer}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
           style={imageStyle}
          src={phone1}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageStyle}
          src={watch1}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageStyle}
          src={speaker}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
    


  );
}

export default ImageSlider;


