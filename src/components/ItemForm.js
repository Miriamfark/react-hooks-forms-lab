import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [input, setInput] = useState("")
  const [category, setCategory] = useState("Produce")

  const newItem = {
    id: uuid(), 
    name: input,
    category: category
  };

  function handleSubmit(event) {
    event.preventDefault()
    onItemFormSubmit(newItem)
    
  }

  function handleInputChange(event) {
    console.log(event.target.value)
    setInput(event.target.value)

    newItem["name"] = event.target.value
  }

  function handleCategoryChange(event) {
    console.log(event.target.value)
    setCategory(event.target.value)
console.log(category)
    newItem["category"] = event.target.value
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleInputChange} value={input} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
