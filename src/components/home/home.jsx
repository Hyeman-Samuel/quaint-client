import React,{Component} from "react"
import TopNavBar from "../navbar/navbar"
import Footer from "../footer/footer"
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends Component{
    render(){
        return (
            <div>
           <Carousel style={{"marginTop":"-25px"}}>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="http://lorempixel.com/400/200/"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="http://lorempixel.com/400/200/"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://lorempixel.com/400/200/"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     <Footer/>      
</div>
)
    }
}

export default Home