import React from 'react';
import ReactDOM from 'react-dom';
import SideBox from "../containers/sidebox"


const createCar = () => {
  console.log("is this where I am supposed")
  return (

    <div className = "sidebox">
       <img src={'http://placehold.it/800x200&text=slide1'} alt="boohoo" className="img-sidebox"/>
       Our Garage is the Best Kept Secret in Town
    </div>

    )

}

export default createCar
