import React from "react";

class DogCard extends React.Component{

  state = {bark: false}

  handleClick = () => {
    if (this.state.bark === false){
      this.setState((prevState) => ({bark: true}))
    } else if (this.state.bark === true){
      this.setState((prevState) => ({bark: false}))
    }
  }


  render(){
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.dog.name}</h2>
          <img alt={this.props.dog.name} src={this.props.dog.img} />
        </span>
        <span className="bark">
          <button onClick={this.handleClick}>Bark</button>
        </span>
        {this.state.bark === false ? null : <h3>Bark</h3>}
      </div>
    );
  }
}

export default DogCard;