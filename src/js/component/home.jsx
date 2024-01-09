import React, { useState } from "react";




const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);



	return (
		<div className="container">
			<h1 className="text-center mt-5">To do list</h1>
			<ul className="">
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat(inputValue));
								setInputValue("");
							}
						}}
						placeholder="what do you need to do?" ></input>
				</li>
				{todos.map((item, index) => (
					<li>

						{item}	<i className="fa-sharp fa-solid fa-trash" style={{ color: '#000000' }} onClick={() => setTodos(
							todos.filter(
								(t, currentIndex) => index != currentIndex
							)
						)
						}></i>
					</li>
				))}

			</ul >
			<div>
					{todos.length} task
			</div>
			
		</div >
	);
};

export default Home;
