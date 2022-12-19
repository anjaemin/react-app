import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const [toDos, setToDos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((current) => [toDo, ...current]);
    setToDo("");
  }
  return (
  <div>
    <h1>My ToDos({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={toDo} placeholder="Write your to do..." />
      <button>Add ToDo</button>
    </form>
    <hr />
    <ul>
      {toDos.map((item, index) => 
        <li key={index}>{item}</li>
      )}
    </ul>
  </div>
  )
}

export default App;
