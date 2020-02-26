import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Link
} from "react-router-dom";
import createCar from "../components/createcar"

class SideBox extends Component{

  constructor(props){
    super(props)
  }

    render(){
      return(
        <div className = "sidebox">
           <img src={'http://placehold.it/800x200&text=slide1'} alt="boohoo" className="img-sidebox"/>
           Our Garage is the Best Kept Secret in Town
           <Link to = "/createcar"> Create New Car </Link>
        </div>

      )
    }
}



export default SideBox
