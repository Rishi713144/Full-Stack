// https://react.dev/learn/reusing-logic-with-custom-hooks
import { useEffect, useState } from "react";
import axios from "axios";

function useSuperman() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("")
      .then((res) => {
        setTodos(res.data.todos)
      })
  }, []);

  return todos;
}

function App() {
  const todos = useSuperman();

  return <div>
    {todos}
  </div>;
}

export default App;