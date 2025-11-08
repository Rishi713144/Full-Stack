

import  { useState, useMemo , useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  // Memoized expensive calculation
  const count = useMemo(() => {
    console.log("memo got called");
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);

  return (
    <div>
      <input
        type="number"
        placeholder="Find sum from 1 to n"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <br />
      Sum from 1 to {inputValue} is <strong>{count}</strong>
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;
