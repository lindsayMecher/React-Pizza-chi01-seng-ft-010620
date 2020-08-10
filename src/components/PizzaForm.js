import React from "react";
import { connect } from 'react-redux';

class PizzaForm extends React.Component {

  constructor(){
    super()
    this.state = {
      topping: '',
      size: '',
      vegetarian: false
    }
  }

  handleChange = (e) => {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    })
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
              <input className="form-check-input" type="radio" value="Vegetarian" checked={null}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" checked={null}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={() => {}}>Submit</button>
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
