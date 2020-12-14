import React from 'react'

class CreateForm extends React.Component{

    state = {
        name: "",
        breed: "", 
        img: ""
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({[e.target.name]: e.target.value}))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.createNewDog(this.state)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange}/>
                <input type="text" placeholder="image" name="img" value={this.state.img} onChange={this.handleChange}/>
                <input type="text" placeholder="breed" name="breed" value={this.state.breed} onChange={this.handleChange}/>
                <button>Create Dog</button>
            </form>
            )
    }
}

export default CreateForm