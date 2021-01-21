import React,{Component} from "react";
import "./product.css"
import TopNavBar from "../navbar/navbar"
import Footer from "../footer/footer"
import 'bootstrap/dist/css/bootstrap.min.css';

class Product extends Component{



   handleAddToCart(id){
    alert(id+" added to cart")
}

    render(){
        return(
            <div>
            <div className="container row" style={{"paddingTop":"20px","marginBottom":"40px"}}>
 
            <div className="left-column col-md-4 offset-md-2" style={{"marginRight":"20px"}}>        
              <img src="http://lorempixel.com/430/566/" alt="Denim Jeans" style={{"width":"100%"}}/>
            </div>
           
           
            <div className="right-column col-md-5">
           
              <div className="product-description">
                <span>Hoodie</span>
                <h1>{this.props.match.params.id}</h1>
                <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
              </div>
           
              <div className="product-configuration">
           
                <div className="cable-config">
                  <span>Size</span>
           
                  <div className="cable-choose">
                    <button>XS</button>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXL</button>
                  </div>                 
                </div>
              </div>
    
                <div  className="product-price">
                     <h3 >148$</h3>
                   
                </div>
                    <h3 id="price">148$</h3>
                <button href="#" style={{ width:"150px",height:"50px"}} className="cart-btn" onClick={this.handleAddToCart.bind(this,this.props.match.params.id)}>Add to cart</button>
                </div>
            </div> 
            <Footer/>
            </div>
        )
    }
}

export default Product