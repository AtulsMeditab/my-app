import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table.js';
import {Grid, Col, Row} from 'react-bootstrap';

class App extends Component {
  headers = ["First Name", "Last Name", "Emp Id"];
  data= [
    { first_name: "Bhushan", last_name: "Mer", emp_id: 456, id:25},
    { first_name: "Bhushan", last_name: "Mer", emp_id: 456, id: 85}
  ];
  render() {
    return (
      <Table headers = {this.headers} data={this.data} enableRowSelection = {true}/>
    );
  }
}

export default App;
