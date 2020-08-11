import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import { connect } from 'react-redux';
const pizzaURL = "http://localhost:3000/pizzas"

class App extends Component {

  componentDidMount(){
    this.fetchPizzas();
  }

  fetchPizzas = () => {
    fetch(pizzaURL)
      .then(resp => resp.json())
      .then(pizzas => {
        this.props.savePizzas(pizzas);
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm fetchPizzas={this.fetchPizzas}/>
        <PizzaList pizzas={this.props.pizzas}/>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    pizzas: state.pizzas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    savePizzas: (pizzas) => {
      dispatch({type: "SAVE_PIZZAS", payload: pizzas})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);