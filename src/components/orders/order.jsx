import React,{Component} from "react"
import "./order.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Orders extends Component{
    render(){
        return(
            <div className="container mb-4" style={{"marginTop":"40px"}}>
        <div className="row">
            <div className="col-12">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col"> </th>
                                <th scope="col">Product</th>
                                <th scope="col">Date</th>
                                <th scope="col" className="text-center">Quantity</th>
                                <th scope="col" className="text-right">Price</th>
                                <th scope="col" className="text-center">Delievery status</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                <td>Product Name Dada</td>
                                <td>In stock</td>
                                <td className="text-center">1</td>
                                <td className="text-right">124,90 €</td>
                                <td className="text-center">Delievered</td>
                            </tr>
                            <tr>
                                <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                <td>Product Name Toto</td>
                                <td>In stock</td>
                                <td className="text-center">2</td>
                                <td className="text-right">33,90 €</td>
                                <td className="text-center">Delievered</td>
                            </tr>
                            <tr>
                                <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                <td>Product Name Titi</td>
                                <td>In stock</td>
                                <td className="text-center">3</td>
                                <td className="text-right">70,00 €</td>
                                <td className="text-center">Delievered</td>
                            </tr>                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div> 
        )
    }
}


export default Orders