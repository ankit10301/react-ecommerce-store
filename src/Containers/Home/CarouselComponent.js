import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () =>{
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src='https://chekromul.github.io/uikit-ecommerce-template/images/promo/macbook-new.jpg'
          alt="First slide"
          style={{maxHeight: '542px'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src='https://chekromul.github.io/uikit-ecommerce-template/images/promo/iphone.jpg'
          alt="Second slide"
          style={{maxHeight: '542px'}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src='https://chekromul.github.io/uikit-ecommerce-template/images/promo/ipad.jpg'
          alt="Third slide"
          style={{maxHeight: '542px'}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;