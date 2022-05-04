import React from "react";

function Pizza({ pizza, onEditPizza }) {
  const { size, topping, vegetarian } = pizza;

  function handleClick() {
    onEditPizza(pizza);
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Vegetarian" : "Not Vegetarian"}</td>
      <td>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
