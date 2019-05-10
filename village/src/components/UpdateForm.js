import React, { Component } from 'react';

class UpdateForm extends Component {
  state = {
    //   name: '',
    //   age: '',
    //   height: ''
    smurf: this.props.activeSmurf
    };
  

  handleSubmit = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.updateSmurf(this.state.smurf);

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({
        ...this.state.smurf,
        [e.target.name]: e.target.value });
  };

  render() {
      console.log(this.props.activeSmurf)
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Edit This Smurf</button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
