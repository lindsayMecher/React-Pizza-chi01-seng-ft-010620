import React, { Component } from 'react';
import Pizza from '../components/Pizza';

class PizzaList extends Component {

  renderPizzas = () => {
    const pizzas = this.props.pizzas
    console.log(pizzas)
    return pizzas.map(pizza => {
      return(
          <Pizza key={pizza.id} pizza={pizza}/>
      )
    })
  }

  render() {

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.renderPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
