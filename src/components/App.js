import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const URL = "http://localhost:3001/pizzas";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [eachPizza, setEachPizza] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((data) => setPizzas(data));
  }, []);

  function handleChangeForm(name, value) {
    console.log(value);
    setEachPizza({
      ...eachPizza,
      [name]: value,
    });
  }

  function handleEditPizza(updatedPizza) {
    const updatedPizzas = pizzas.map((pizza) =>
      pizza.id === updatedPizza.id ? updatedPizza : pizza
    );
    setEachPizza(updatedPizza);
    setPizzas(updatedPizzas);
  }

  return (
    <>
      <Header />
      <PizzaForm
        pizza={eachPizza}
        onChangeForm={handleChangeForm}
        onEditPizza={handleEditPizza}
      />
      <PizzaList pizzas={pizzas} onEditPizza={setEachPizza} />
    </>
  );
}

export default App;
