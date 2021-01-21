import React,{Component} from "react"
import "./catalogue.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,DropdownButton} from "react-bootstrap"

class Products extends Component{

    State={
        Products:[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6},{name:7},{name:8}]
    }
    handleSelect=(key)=>{
       alert(key)
    }

    render(){
        return (
            <div>
            <div className="row" style={{"backgroundColor": "ghostwhite", "textAlign": "center","marginTop":"-25px","marginBottom":"50px"}}>
            <div className="col-md-2 offset-md-5" style={{"paddingTop":"10px","textAlign": "center","font":"status-bar"}}>
                <h3>{this.props.title}</h3>
            </div>
            <hr/>
            <div className="col-md-2 offset-md-3 form-group" style={{textAlign:"end", "paddingRight": "80px"}}>
            <DropdownButton onSelect={this.handleSelect} style={{"marginTop":"20px"}} title="Filter">
                
                <Dropdown.Item eventKey="1" as="button">Alphabetical,A-Z</Dropdown.Item>
                <Dropdown.Item eventKey="2" as="button">Alphabetical,Z-A</Dropdown.Item>
                <Dropdown.Item eventKey="3" as="button">Price,low - high</Dropdown.Item>
                <Dropdown.Item eventKey="4" as="button">Price, high - low</Dropdown.Item>
                <Dropdown.Item eventKey="5" as="button">Date, newest - oldest</Dropdown.Item>
                <Dropdown.Item eventKey="6" as="button">Date, oldest - newest</Dropdown.Item>
            </DropdownButton>
            </div>
        </div>
            <div style={{"width": "100% !important","textAlign":"center","marginBottom":"100px"}} className="row">
         { this.State.Products.map((product)=>(
            <div key={product.name} style={{"paddingTop":"10px"}} className="col-md-3 col-sm-2" id="fullCard">
            <div className="card">
               <a href={"/product/"+product.name} style={{"textDecoration":"none","color":"black"}}> <img id="Image" src="http://lorempixel.com/430/566/" alt="Denim Jeans" style={{"width":"100%"}}/>
                <b style={{"fontSize": "20","padding": "10px"}}>Lorem Picsum. Lorem Ipsum... but for photos. </b>
                <p style={{"paddingBottom": "10px ","paddingTop": "10px"}}  className="price">$19.99</p> </a>              
              </div>
        </div>      
        ))} 
   </div></div>) 
   
}
}


export default Products