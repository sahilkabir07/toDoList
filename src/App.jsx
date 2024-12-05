import { useState } from "react";
import "./App.css";
import Status from "./Components/StatusComponent/Status";

function App() {
  // two states to manage the input field and select dropdown
  const [inputState, setInputState] = useState("");

  const [todo, setTodo] = useState({
    inprogress: [],
    pending: [],
    completed: [],
  });
  const [selectedValue, setSelectedValue] = useState("inprogress");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleInput = (event) => {
    setInputState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo((prevState) => ({
      ...prevState,
      [selectedValue]: [
        ...prevState[selectedValue],
        {
          name: inputState,
          priority: "HIGH",
          createdAt: new Date().getFullYear(),
          description: "Lorem Ipsum!!",
        },
      ],
    }));
    setInputState("");
  };
console.log(">>",todo);

  return (
    <div id="parentBox">
      <div id="mainBox">
        <form onSubmit={handleSubmit}>
          <input id="entry" type="text" placeholder="Input Todo" onChange={handleInput} />
          <button id="sbmtBtn" type="submit">Submit</button>
        </form>
        <select id="selector" onChange={handleChange}>
          <option value={"inprogress"}>In-Progress</option>
          <option value={"pending"}>Pending</option>
          <option value={"completed"}>Completed</option>
        </select>
      </div>
      <div id="mainBox2">
        <div>
           {todo.map(item => ( <h2>{item.inprogress}</h2>))}
          <h2>

          </h2>
            
        </div>
        <div>
          <h2>

          </h2>

        </div>
        <div>
          <h2>

          </h2>

        </div>
      </div>
      {/* 
      <Status todo={todo} /> */}
    </div>
  );
}

export default App;
