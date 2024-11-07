import React , {useState} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [formData, setFormData] = useState({
    topping:"",
    size:"Small",
    vegetarian:true

  })
  const [pizzas, setPizza] = useState([])

  function addPizza(newPizza){
    setPizza((prevPizza)=> [...prevPizza, newPizza])
  }
  return (
    <>
      <Header />
      <PizzaForm formData={formData} setFormData={setFormData} addPizza={addPizza}/>
      <PizzaList pizzas={pizzas} setPizza={setPizza}/>
    </>
  );
}

export default App;