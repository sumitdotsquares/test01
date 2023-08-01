import React from "react";
import adminLayout from "../hoc/adminLayout"


//For API Requests
import axios from 'axios';
import { Link } from "react-router-dom";

class ContactEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        //Get all users details in bootstrap table
        axios.get('https://reqres.in/api/users/2').then(res => {
            //Storing users detail in state array object
            this.setState({ data: res.data.data });

        });

    }
    render() {
        //Datatable HTML
        return (
            <div className="MainDiv">

                <div className="container p-5">
                    <h1>Update Contact Detail</h1>
                    <form>

                        <div className="row">
                            <div className="col">
                                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="First Name" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.data.first_name} />
                                    <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                </div>
                            </div>
                            <div className="col">
                                <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Last Name" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.data.last_name} />
                                    <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="exampleInputEmail1" className="form-label">Contact Number</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Contact Number" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.data.id} />
                                    <span className="input-group-text" id="basic-addon2"><i className="fa fa-mobile"></i></span>
                                </div>
                            </div>
                            <div className="col">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.data.email} />
                                    <span className="input-group-text" id="basic-addon2">@</span>
                                </div>
                            </div>
                        </div>

                        {/* <button type="submit" className="btn btn-default">Update</button> */}
                        <Link to={"/contact"} className="btn btn-default">Update</Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default adminLayout(ContactEdit);