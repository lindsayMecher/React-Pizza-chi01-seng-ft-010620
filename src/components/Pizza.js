import React from "react"

const Pizza = ({ pizza }) => {
  console.log(pizza)
  return(
    <tr id={pizza.id}>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{
        pizza.vegetarian ?
        "Yes"
        :
        "No"
      }
      </td>
      <td>
        <button id={pizza.id} className={"btn btn-primary"}>
          Edit Pizza
        </button>
      </td>
    </tr>
  )
}

export default Pizza;
