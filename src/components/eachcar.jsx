import React from 'react';
import ReactDOM from 'react-dom';


import CarsIndex from '../containers/carsIndex'


const EachCar = (props) => {
  return (
    <div>
      {props.id}
      {props.brand}
      {props.model}
      {props.owner}
      {props.plate}
    </div>
  );
};

export default EachCar;

