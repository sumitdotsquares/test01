import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import 'jquery/dist/jquery.min.js';
//Datatable Modules
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';
import ContatDummyList from './ContatDummyList';

// var dt = require('datatables.net')();
export default function ContactListTable() {
  const [coviddata, setcoviddata] = useState([]);

  useEffect(() => {
    // axios
    //   .get('https://dummyjson.com/users')
    //   .then((res) => {
    //     console.log(res.data.users);
    //     setcoviddata(res.data.users);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log(ContatDummyList.users);
    setcoviddata(ContatDummyList.users);
    $(document).ready(function () {
      $('#table_id').DataTable();
    });
  }, [coviddata]);

  const tabledata = coviddata.map((obj) => {
    return (
      <tr key={obj.id}>
        <td><img src={obj.image} alt='this is testing' style={{width:50}}/></td>
        <td>{obj.firstName}</td>
        <td>{obj.lastName}</td>
        <td>{obj.email}</td>
        <td>{obj.phone}</td>
      </tr>
    );
  });

  return (
    <div>
      
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table id="table_id" className=" table table p-3 mb-2 bg-success bg-gradient">
            <thead>
              <tr>
                <th> Image </th>
                <th> firstName</th>
                <th> lastName</th>
                <th> email</th>
                <th> phone </th>
              </tr>
            </thead>
            <tbody>{tabledata}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
