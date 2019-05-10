import React, { Component } from 'react';

class UpdateForm extends Component {
  state = {
    //   name: '',
    //   age: '',
    //   height: ''
    smurf: this.props.activeSmurf
    };
  

  handleInputChange = e => {
    this.setState({
        smurf: {...this.state.smurf,
        [e.target.name]: e.target.value }});
  }

  handleSubmit = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.updateSmurf(this.state.smurf);
    console.log(this.state)

    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
  }

  render() {
      console.log(this.props.activeSmurf)
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Edit This Smurf</button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
