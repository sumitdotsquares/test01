import React from "react";
import adminLayout from "../hoc/adminLayout"

//Bootstrap and jQuery libraries
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
//For API Requests
import axios from 'axios';
import { Link } from "react-router-dom";

class ContactListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        //Get all users details in bootstrap table
        axios.get('https://reqres.in/api/users').then(res => {
            //Storing users detail in state array object
            this.setState({ data: res.data.data });

        });
        //initialize datatable
        $(document).ready(function () {
            setTimeout(function () {
                $('#example').DataTable(
                    {
                        pagingType: 'full_numbers',
                        pageLength: 5,
                        processing: true,
                        dom: 'Bfrtip',
                        buttons: ['copy', 'csv', 'print'
                        ]
                    }
                );
            },
                1000
            );
        });
    }
    render() {
        //Datatable HTML
        return (
            <div className="MainDiv">

                <div className="container p-5">

                    <table id="example" className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((result) => {
                                return (

                                    <tr key={result.id}>
                                        <td>{result.id}</td>
                                        <td>{result.first_name}</td>
                                        <td>{result.last_name}</td>
                                        <td>{result.email}</td>
                                        <td><Link to={"/contact-edit-1"} className="text-body">Edit</Link> | <Link to={"/contact/delete/" + result.id} className="text-body">Delete</Link></td>
                                    </tr>

                                )
                            })}


                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default adminLayout(ContactListPage);