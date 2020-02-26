import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SideBox from "./sidebox"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EachCar from '../components/eachcar';


class CarsIndex extends Component {
  constructor(props){
    super(props)
  }

renderlist(){
 return this.props.cars.map((car) => {
   return <EachCar key = {car.id} brand={car.brand} model={car.model} owner={car.owner} plate ={car.plate} />
  }
 )
}

  render(){
    console.log(this.props.cars)
    return(

        <div className = "carsIndex">
           <SideBox />

           <ul>
             {this.renderlist()}
           </ul>
        </div>

    )
  }
}


function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps)(CarsIndex);

