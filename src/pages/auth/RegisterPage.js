import React from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";

class RegisterPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return <>
            <form className="login-form">
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Sign Up</h1>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" />
                </div>

                {/* <!-- Confirm Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example5">Confirm Password</label>
                    <input type="password" id="form3Example5" className="form-control form-control-lg"
                    placeholder="Enter confirm password password" />
                </div>

                {/* <!-- Confirm Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example6">Phone number</label>
                    <input type="text" id="form3Example6" className="form-control form-control-lg"
                    placeholder="Enter phone number" />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <Link to="/" type="button" className="btn btn-primary btn-lg">Register</Link>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Have an account? <Link to="/login" className="text-body">Login</Link></p>
                </div>
            </form>
        </>
    }
}

export default authLayout(RegisterPage);