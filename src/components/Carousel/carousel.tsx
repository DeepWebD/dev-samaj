
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import banner1 from '../../assets/image/banner1.jpg'
import banner2 from '../../assets/image/banner2.jpg'
import banner3 from '../../assets/image/banner3.jpg'
function Slider() {
  return (
    <Carousel style={{position:'relative',marginTop:'-50px'}}>
      <Carousel.Item interval={1000}>
        <Image src={banner1} style={{width:'100vw',height:'100vh',aspectRatio:'auto',objectFit: 'cover'}}/>
        <Carousel.Caption style={{backgroundColor:'rgba(0,0,0,0.6)'}}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src={banner2} style={{width:'100vw',height:'100vh',objectFit: 'cover'}}/>
        <Carousel.Caption style={{backgroundColor:'rgba(0,0,0,0.6)'}}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={banner3} style={{width:'100vw',height:'100vh',objectFit: 'cover'}}/>
        <Carousel.Caption style={{backgroundColor:'rgba(0,0,0,0.6)'}}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;