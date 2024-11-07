import React from "react";
import { v4 as uuid } from "uuid";

function PizzaForm({ formData, setFormData, addPizza }) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData, 
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPizza = { ...formData, id: uuid() };
    addPizza(newPizza);

   // Clear the form after adding the pizza
  setFormData({
    topping: "",
    size: "",
    vegetarian: true, // Default to vegetarian
    edit: "",
  })
  } 

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={formData.topping}
            onChange={handleChange}
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"  // Added name attribute here
            onChange={handleChange}
            value={formData.size}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={formData.vegetarian}
              checked={formData.vegetarian === true}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={!formData.vegetarian}
              checked={formData.vegetarian !== true }
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm
