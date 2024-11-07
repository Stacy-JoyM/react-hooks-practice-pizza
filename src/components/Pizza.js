import React from "react";

function Pizza({pizza, removePizza}) {
  console.log(pizza)
  return (
    <>
    <tr>
        <td>{pizza.topping}</td>
        <td>{pizza.size}</td>
        <td>{pizza.vegetarian ===true ? "Vegetarian" : "Not Vegetarian"}</td>
        <td>{pizza.edit}</td>
        <td>
          <button type="button" className="btn btn-danger" onClick={()=> removePizza(pizza.id)}>
            Delete Pizza
          </button>
        </td>
    </tr>
    </>
  );
}

export default Pizza;
