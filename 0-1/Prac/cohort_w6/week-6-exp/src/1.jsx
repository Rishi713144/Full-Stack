



// In React, every component’s return statement is like a gift box.
// React says: “Hand me exactly one box. I don’t care how many toys are inside—just one box.”
// If you try to hand React two boxes side by side, it gets confused and throws the error:
// “Return must have one child.""
// https://react.dev/reference/react/Fragment
// https://react.dev/reference/react/memo

import React, { Fragment } from 'react'
import { useState } from 'react'

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Learn React",
    description: "Learn React by building projects"
  },
  {
    id: 2,
    title: "Learn JavaScript",
    description: "Learn JavaScript by building projects"
  },
  {
    id: 3,
    title: "Learn Github",
    description: "Learn Github by deploying projects"
  }])


  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }


  return (
    <div>

      <button onClick={addTodo}>Add Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}



    </div>
  )
}




function Todo({ title, description }) {
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>


  </div>
};

export default App
