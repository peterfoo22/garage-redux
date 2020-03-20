import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SideBox from "./sidebox"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EachCar from '../components/eachcar';
import { carsGet } from '../actions/index';


class CarsIndex extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
    this.deleteMe = this.deleteMe.bind(this);
  }


  componentDidMount() {
    this.props.carsGet()
  }

  deleteMe(){

  }

  renderList() {
    return this.props.cars.map((car) => {
      return (
        <EachCar
          key={car.id}
          brand={car.brand}
          model={car.model}
          owner={car.owner}
          plate={car.plate}
        />,
        <button />
      );
    }

    );
  }

  render() {
    if (this.props.cars.length === 0) {
      return [
        <SideBox />,
        <div> Loading</div>
      ];
    }

    return [
      <SideBox />,
      <div className = "showallcars"> {this.renderList()}</div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ carsGet }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);

