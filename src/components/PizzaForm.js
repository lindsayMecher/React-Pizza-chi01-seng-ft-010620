import React from "react";
import { connect } from 'react-redux';
const pizzaURL = "http://localhost:3000/pizzas";

class PizzaForm extends React.Component {

  constructor(){
    super()
    this.state = {
      topping: '',
      size: 'Small',
      vegetarian: false
    }
  }

  handleChange = (e) => {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let booleanVal;
    if (this.state.vegetarian === "true") {
      booleanVal = true
    } else if (this.state.vegetarian === "false") {
      booleanVal = false
    }
    const newState = {
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: booleanVal
    }
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newState)
    }
    fetch(pizzaURL, reqObj)
      .then(resp => resp.json())
      .then(data => {
        this.props.fetchPizzas();
        console.log(`You created a new ${data.size} ${data.topping} pizza. It is${data.vegetarian ? "" : " not"} vegetarian.`)
      })
      .catch(err => console.log(err))
  }

  render(){
    return(
        <div className="form-row">
          <div className="col-5">
              <input onChange={this.handleChange} type="text" value={this.state.topping} name="topping" className="form-control" placeholder="Pizza Topping"/>
          </div>
          <div className="col">
            <select name="size" onChange={this.handleChange} value={this.state.size} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" onChange={this.handleChange} name="vegetarian" type="radio" value={true} checked={(this.state.vegetarian === 'true')}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" onChange={this.handleChange} name="vegetarian" type="radio" value={false} checked={(this.state.vegetarian === 'false')}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={(e) => this.handleSubmit(e)}>Submit</button>
          </div>
        </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPizza: (pizza) => {
      dispatch({type: "CREATE_PIZZA", payload: pizza})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaForm);
