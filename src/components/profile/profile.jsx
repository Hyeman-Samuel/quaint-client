import React,{Component} from "react"
import TopNavBar from "../navbar/navbar"
import Footer from "../footer/footer"
import Orders from "../orders/order"
import Wishlist from "../wishlist/wishlist"
import {Tabs,Tab} from "react-bootstrap"
import "./profile.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Profile extends Component{
    render(){
        return(
            <div>
                
                <h2 style={{"marginLeft":"40%"}} >Your Orders</h2>
                <hr/>
                       <Orders style={{"marginTop":"-25px"}}/>
                <Footer/>
            </div>
        )
    }
}



export default Profile