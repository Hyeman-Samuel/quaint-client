import React,{Component} from "react"
import TopNavBar from "../navbar/navbar"
import Footer from "../footer/footer"
import Products from "../catalogue/products"
import "./wishlist.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Wishlist extends Component{
    render(){
        return(
            <div>
            <Products title={"Wishlist"} />
          <Footer  />
          </div>
        )
    }
}


export default Wishlist