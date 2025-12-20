import { memo, useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0)

  const inputFunction = useCallback(() => {
    console.log("child clicked");
  }, [])

  return <div>
    <ButtonComponent inputFunction={inputFunction} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("child render")

  return <div>
    <button onClick={inputFunction}>Button clicked</button>
  </div>
})

export default App;