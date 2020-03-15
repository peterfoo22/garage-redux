import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SideBox from "../containers/sidebox"

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createCar } from '../actions/index';


class NewCarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: '',
      brand: "",
      owner: "",
      plate: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }


  handleChange(event) {
    if (event.target.name === "theModel") {
      this.setState ({ model: event.target.value });
    } else if (event.target.name === "theBrand") {
      this.setState ({ brand: event.target.value });
    } else if (event.target.name === "theOwner") {
      this.setState ({ owner: event.target.value });
    } else if (event.target.name === "thePlate") {
      this.setState({ plate: event.target.value });
    }
  }

  handleSubmit() {
    event.preventDefault();
    this.props.createCar(this.state.brand, this.state.model, this.state.owner, this.state.plate);
    this.setState({ model: '', brand: '', owner: '', plate: ' '}); // Reset message input
  }


  render() {
    return (
      <form className="newcarform" onSubmit={this.handleSubmit}>
        <label>
          Brand:
          <input type="text" name="theBrand" onChange={this.handleChange} />
        </label>
        <label>
          Model:
          <input type="text" name="theModel" onChange={this.handleChange} />
        </label>
        <label>
          Owner:
          <input type="text" name="theOwner" onChange={this.handleChange} />
        </label>
        <label>
          Plate Number:
          <input type="text" name="thePlate" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createCar }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewCarForm);
