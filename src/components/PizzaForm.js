import React from "react";

function PizzaForm({ pizza, onChangeForm, onEditPizza }) {
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pizza),
    })
      .then((r) => r.json())
      .then(onEditPizza);
  }

  function handleRadioChange(event) {
    onChangeForm(event.target.name, event.target.value === "Vegetarian");
  }

  function handleChange(e) {
    onChangeForm(e.target.name, e.target.value);
  }
  if (!pizza) return null;
  const { topping, size, vegetarian } = pizza;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            onChange={handleChange}
            value={topping}
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            onChange={handleChange}
            value={size}
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
              value="Vegetarian"
              onChange={handleRadioChange}
              checked={vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={handleRadioChange}
              checked={!vegetarian}
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

export default PizzaForm;
