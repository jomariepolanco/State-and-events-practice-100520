import React, { Component } from "react";
import {apiResponse} from '../api'
import DogCard from '../Components/DogCard'
import CreateForm from '../Components/CreateForm'
import SearchForm from '../Components/SearchForm'

class DogsList extends Component {

  state = {
    apiResponse,
    searchTerm: ""
  }

  dogs = () => {
    let filteredArray = this.state.apiResponse.filter(dog => dog.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return filteredArray.map(dogObject => <DogCard key={dogObject.id} dog={dogObject}/>)
  }

  createNewDog = (dogObj) => {
    this.setState((prevState) => ({apiResponse: [...prevState.apiResponse, dogObj]}))
  }

  handleSearchForm = (e) => {
    e.persist()
    this.setState((prevState) => ({searchTerm: e.target.value}))
  }

  render() {
    return(
      <div className="list">
        <CreateForm createNewDog={this.createNewDog} />
        <br/>
        <SearchForm searchTerm={this.state.searchTerm} handleSearchForm={this.handleSearchForm}/>
        {this.dogs()}
      </div>
    )
  }
}

export default DogsList;
