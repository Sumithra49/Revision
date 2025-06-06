import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  function handleSubmit(e) {
    e.preventDefault();
    let title = e.target[0].value;
    let name = e.target[1].value;
    let prioty = e.target[2].value;

    let obj = {
      title: title,
      name: name,
      prioty: prioty,
    };
    setData((data) => [...data, obj]);
    e.target.reset();
  }

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter todo title" />
        <br />
        <br />
        <input type="text" placeholder="Enter todo name" />
        <br />
        <br />
        <input type="text" placeholder="task prioty" />
        <br />
        <br />
        <button>Add</button>
      </form>
      <div className="todo-list">
        {data.map((el) => {
          return (
            <li>
              {el.title},{el.name},{el.prioty}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;
