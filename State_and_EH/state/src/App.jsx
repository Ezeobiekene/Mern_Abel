import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  // setTimeout(() => {
  //   setCounter(counter + 1)
  // }, 3000)

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  const zeroCounter = () => {
    setCounter(0);
  };
  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={decreaseCounter}>-</button>
      <button onClick={zeroCounter}>zero</button>
      <button onClick={increaseCounter}>+</button>
    </>
  );
};

export default App;
