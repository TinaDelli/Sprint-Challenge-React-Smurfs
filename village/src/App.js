import React, { Component } from 'react';
import axios from 'axios';
import {Route, withRouter, NavLink} from "react-router-dom";

import './App.css';
import SmurfForm from './components/SmurfForm';
import UpdateForm from './components/UpdateForm';
import Smurfs from './components/Smurfs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: {}
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
 
 componentDidMount(){
   axios
   .get('http://localhost:3333/smurfs')
   .then(res => this.setState({smurfs: res.data}))
   .catch(err=> console.log(err))
 }

 addSmurf = smurf =>{
   axios
   .post("http://localhost:3333/smurfs", smurf)
   .then(res => this.setState({smurfs: res.data}))
   .catch(err => console.log(err));
   this.props.history.push('/')
 }

 deleteSmurf = id => {
   axios 
   .delete(`http://localhost:3333/smurfs/${id}`)
   .then(res => this.setState({smurfs:res.data}))
   .catch(err => console.log(err))
  this.props.history.push('/')
 }

 updateSmurf = updatedSmurf => {
   axios 
   .put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
   .then(res => this.setState({smurfs: res.data}))
   .catch(err => console.log(err));
   this.props.history.push('/')
 }

 setUpdateForm = smurf => {
   this.setState({activeSmurf: smurf});
   this.props.history.push('/update-form')
 }

  render() {
    return (
      <div className="App">
      <nav>
        <h1>Smurf Village</h1>
        <div className="nav-links">
      <NavLink to="/">
        Smurf List
      </NavLink>
      <NavLink to="smurf-form" >
        Add A Smurf
      </NavLink>
      </div>
      </nav>
      <Route 
      exact
      path="/smurf-form"
      render= { props =>  <SmurfForm {...props} addSmurf={this.addSmurf}  /> }
      />
      <Route 
      exact
      path="/"
      render = { props =>  <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} setUpdateForm={this.setUpdateForm} /> }
        />
      <Route 
      exact
      path= "/update-form"
      render={props => (<UpdateForm {...props} updateSmurf ={this.updateSmurf} activeSmurf={this.state.activeSmurf}/>)}
      />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;
