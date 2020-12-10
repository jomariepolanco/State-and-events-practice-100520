import React, { Component } from "react";
import {apiResponse} from '../api'
import DogCard from '../Components/DogCard'

class DogsList extends Component {

  dogs = () => {
    return apiResponse.map(dogObject => <DogCard key={dogObject.id} dog={dogObject}/>)
  }
  render() {
    // console.log(this.dogs())
    return(
      <div className="list">
        {this.dogs()}
      </div>
    )
  }
}

export default DogsList;
