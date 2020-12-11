import React from "react";

class DogCard extends React.Component{

  state = {bark: false}

  handleClick = () => {
      this.setState((prevState) => ({bark: !prevState.bark}))
  }


  render(){
    // console.log(this.state.bark)
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.dog.name}</h2>
          <img alt={this.props.dog.name} src={this.props.dog.img} />
        </span>
        <span className="bark">
          <button onClick={this.handleClick}>Bark</button>
        </span>
        {this.state.bark ? <h3>Bark</h3>: null}
      </div>
    );
  }
}

export default DogCard;