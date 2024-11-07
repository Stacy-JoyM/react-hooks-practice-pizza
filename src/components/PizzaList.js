import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, setPizza}) {


  const pizzasDisplay = pizzas.map((pizza, index)=>{
    return (
      <Pizza key={index} pizza={pizza} removePizza={removePizza}/>
    )
  })

  function removePizza(id){
    setPizza(pizzas.filter((pizza)=> pizza.id !== id ))
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzasDisplay
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
