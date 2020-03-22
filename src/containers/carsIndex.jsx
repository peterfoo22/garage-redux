import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import SideBox from "./sidebox"
import EachCar from '../components/eachcar';
import { carsGet } from '../actions/index';

class CarsIndex extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    this.props.carsGet()
  }


  renderList() {
    return this.props.cars.map((car) => {
      return ([
        <EachCar
          key={car.id}
          brand={car.brand}
          model={car.model}
          owner={car.owner}
          plate={car.plate}
        />,
        <Link to={`cars/${car.id}`}>See This Car</Link>
      ]
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

