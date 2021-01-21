import React,{Component} from "react"
import TopNavBar from "../navbar/navbar"
import Footer from "../footer/footer"
import Products from "../catalogue/products"
import "./catalogue.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Breadcrumb} from "react-bootstrap"

class catalogue extends Component{

    render(){
        return(
        <div>
            <Breadcrumb title="Hoodies" style={{"textAlign": "center","marginTop":"-25px"}}>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Hoodies
                </Breadcrumb.Item>
                </Breadcrumb>
                <Products title={"Hoodies"}/>                                  
       
          <Footer />
        </div>
        )
    }
}


export default catalogue