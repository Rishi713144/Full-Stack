

// In React, every component’s return statement is like a gift box.
// React says: “Hand me exactly one box. I don’t care how many toys are inside—just one box.”
// If you try to hand React two boxes side by side, it gets confused and throws the error:
// “Return must have one child.""
// https://react.dev/reference/react/Fragment
// https://react.dev/reference/react/memo

import React, { Fragment } from 'react'
import { useState } from 'react'

function App() {
  const [title, setTitle] = useState("My name is Rishi")
  function updateTitle() {
    setTitle("My name is " + Math.random());

  }

  return (
    <div>
      <button onClick={updateTitle}>Update the Title</button>
      <Header title={title} />
      <Header title="Rishi456" />
      <Header title="Rishi4556" />


    </div>
  )
}




const Header= React.memo(function Header({ title }) {
  return <div>
    {title}

  </div>
});

export default App
