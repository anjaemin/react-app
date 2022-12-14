import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {setKeyword(event.target.value)}
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword])
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter])

  return (
    <div>
      <input type="text" placeholder="Search here..." onChange={onChange} value={keyword} />
      <h1>{counter}</h1>
      <button onClick={onClick} >click me</button>
    </div>
  );
}

export default App;
