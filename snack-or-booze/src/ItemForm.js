import React from "react";
import {useState} from "react";

function ItemForm({setData}){
    const initialState = {
        item: "",
        name: ""
    }
    const [formData, setFormData] = useState(initialState);
    const [item, setItem] = useState('Food');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
            item: item
        }))
    }

    const test = () => {
        const sel = document.getElementById('item');
        console.log(sel.value);
        setItem(sel.value);
    }

    function setDataForParent(e){
        e.preventDefault();
        setData(formData);
        setFormData(initialState);

    }
    return (
        <form onSubmit={setDataForParent}>
            <label htmlFor="item">Food or Drink?</label>
            <select id="item" onChange={test}>
                <option value="Food">Food</option>
                <option value="Drink">Drink</option>
            </select>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name of item"/>
  
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ItemForm;
