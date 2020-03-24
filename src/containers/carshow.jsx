import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { showtheCar, deleteCar } from '../actions/index';
import SideBox from "../containers/sidebox";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class carShow extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const id = this.props.match.params.id
    this.props.showtheCar(id)
  }

  handleClick() {
    const id = this.props.match.params.id
    this.props.deleteCar(id)
  }

  render() {
    // returns the car if there is a car present
    if (this.props.cars) {
      return (
        [<SideBox />,
          <div>{this.props.cars.brand}, {this.props.cars.model},
            {this.props.cars.owner}, {this.props.cars.plate}</div>,
          <button onClick={this.handleClick}>Delete Me</button>
        ]
      );
    }
    return ([<SideBox />, <div>No Record of This Car</div>])
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showtheCar, deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(carShow);
