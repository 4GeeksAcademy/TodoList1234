import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
      const [inputValue, setInputValue] = useState("");
	  const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>My to-do</h1>
           <ul>
               <li><input type="text"  
			   onChange = {(e)=> setInputValue(e.target.value)}
			   value = {inputValue}
			   onKeyPress={(e) => {
	if (e.key === "Enter" && inputValue.trim() !== "") 
		{
		setTodos(todos.concat(inputValue));
		setInputValue("");
	}
    }} 
			   placeholder="Type and do!" /></li>

             {todos.map((t, index) => (
		<li key={index}>
			{t} <i className="fa-solid fa-circle-xmark" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
		</li>
	))}
	   </ul>
        <div>
        <strong>{todos.length} Task to make</strong>
        </div>
		</div>
	);
};

export default Home;