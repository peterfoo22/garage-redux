import React from 'react';
import ReactDOM from 'react-dom';

const EachCar = (props) => {
  return(
    <div>
     {props.brand}
     {props.model}
     {props.owner}
     {props.plate}
     </div>
  )
}

export default EachCar

