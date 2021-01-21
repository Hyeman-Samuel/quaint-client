import React,{Component} from "react"
import TopNavBar from "../navbar/navbar"
import Footer from "../footer/footer"
import "./cart.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus,faTrash} from '@fortawesome/free-solid-svg-icons'


class Cart extends Component{

    render(){
        return(
            <div>

            <div className="container mb-4" style={{"marginTop":"40px"}}>
            <h2 style={{"marginLeft":"40%"}} >Your Cart</h2>
        <div className="row">
            <div className="col-12">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col"> </th>
                                <th scope="col">Product</th>
                                <th scope="col">Available</th>
                                <th scope="col" className="text-center">Quantity</th>
                                <th scope="col" className="text-right">Price</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                <td><a href="/product/1">Product Name Dada</a></td>
                                <td>In stock</td>
                                <td style={{textAlign:"center"}}><button><FontAwesomeIcon icon={faPlus}/></button><label style={{"margin":"10px"}}>1</label><button><FontAwesomeIcon icon={faMinus}/></button></td>
                                <td className="text-right">124,90 €</td>
                                <td className="text-right"><button className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTrash}/></button> </td>
                            </tr>
                            <tr>
                                <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                <td>Product Name Toto</td>
                                <td>In stock</td>
                                <td style={{textAlign:"center"}}><button><FontAwesomeIcon icon={faPlus}/></button><label style={{"margin":"10px"}}>1</label><button><FontAwesomeIcon icon={faMinus}/></button></td>
                                  <td className="text-right">33,90 €</td>
                                <td className="text-right"><button className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTrash}/> </button> </td>
                            </tr>
                            <tr>
                                <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                <td>Product Name Titi</td>
                                <td>In stock</td>
                                <td style={{textAlign:"center"}}><button><FontAwesomeIcon icon={faPlus}/></button><label style={{"margin":"10px"}}>1</label><button><FontAwesomeIcon icon={faMinus}/></button></td>
                                <td className="text-right">70,00 €</td>
                                <td className="text-right"><button className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTrash}/> </button> </td>
                            </tr>                           
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>Total</strong></td>
                                <td className="text-right"><strong>346,90 € (excluding shipping)</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col mb-2">
                <div className="row">
                    <div className="col-sm-12  col-md-6">
                        <button className="btn btn-block btn-light">Continue Shopping</button>
                    </div>
                    <div className="col-sm-12 col-md-6 text-right">
                        <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <Footer/>
    </div>
        )
    }
}

export default Cart