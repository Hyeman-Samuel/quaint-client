import React,{Component} from "react"
import "./footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component{


    render(){
        return (
            <footer id="myFooter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h2 className="logo"><a href="#"> LOGO </a></h2>
                    </div>
                    <div className="col-sm-2">
                        <a><h5> <a><i className="fas fa-expand-alt"></i></a> Customer Care</h5></a>                       
                    </div>
                    <div className="col-sm-2">
                       <a> <h5><a><i className="fas fa-expand-alt"></i></a> Delivery Policy</h5></a>                       
                    </div>
                    <div className="col-sm-2">
                        <a><h5><a><i className="fas fa-expand-alt"></i></a> Terms & Conditions</h5></a>                       
                    </div>
                    <div className="col-sm-3">
                        <div className="social-networks">
                            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
                        </div>
                        <button type="button" className="btn btn-default">Contact us</button>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2020 Copyright QUAINT </p>
            </div>
        </footer>
        )
    }
}

export default Footer 