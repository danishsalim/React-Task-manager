import { useState, useEffect } from "react";
import Main from "./Main";

//using local storage  getitems
function getlocalitems() {
  let localitems = localStorage.getItem("list");
  if (localitems) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
}

const Header = () => {
  const [todos, settodos] = useState(getlocalitems());
  const [newtodo, setnewtodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newtodo.length) {
      settodos([...todos, newtodo]);
    } else {
      alert("Kindly asign some task");
    }

    setnewtodo("");
  }

  //using local storage  setitems
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  const del = (id) => {
    settodos((todos) => {
      return todos.filter((item, idx) => {
        return idx !== id;
      });
    });
  };
  const edit = (e) => {
    console.log(e);
  };

  const handleInputChange = (id, value) => {
    const newTodos = [...todos];
    newTodos[id] = value;
    settodos(newTodos);
  };

  return (
    <header>
      <h1>Task List</h1>
      <form className="new-task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="new-task-input"
          placeholder="What do you have planned ?"
          onChange={(e) => setnewtodo(e.target.value)}
          value={newtodo}
        />
        <input type="submit" className="new-task-submit" value="Add Task" />
      </form>
      {todos.map((newtodo, index) => (
        <Main
          newtodo={newtodo}
          onDel={del}
          onEdit={edit}
          input={(idx, value) => handleInputChange(idx, value)}
          key={index}
          id={index}
        />
      ))}
    </header>
  );
};
export default Header;
