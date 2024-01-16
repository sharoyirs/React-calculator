import React, { useState } from "react";

function App() {
	const [value, setValue] = useState("");
	return (
		<>
			<div className="calculator">
				<div className="text-5xl text-white output">{value}</div>
				<button className="span-two" onClick={() => setValue("")}>
					AC
				</button>
				<button
					className=""
					onClick={() => {
						setValue(value.slice(0, -1));
					}}>
					DEL
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					÷
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					1
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					2
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					3
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					*
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					4
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					5
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					6
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					+
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					7
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					8
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					9
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					-
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					.
				</button>
				<button
					className=""
					onClick={(e) => setValue(value + e.target.textContent)}>
					0
				</button>
				<button
					className="span-two"
					onClick={function () {
						setValue(eval(value));
					}}>
					=
				</button>
			</div>
		</>
	);
}

export default App;
