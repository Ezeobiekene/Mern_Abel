import { useState } from "react";

const App = () => {
  const [click, setClick] = useState({ left: 0, right: 0 });
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0)

  const increaseLeft = () => {
    let newClick = {
      ...click,
      left: click.left + 1,
    };
    setAllClicks(allClicks.concat("L"));
    setClick(newClick);
    setTotal(total + 1)
  };

  const increaseRight = () => {
    let newClick = {
      ...click,
      right: click.right + 1,
    };
    setAllClicks(allClicks.concat("R"));
    setClick(newClick);
    setTotal(total + 1)
  };

  return (
    <>
      {click.left}
      <button onClick={increaseLeft}>left</button>
      <button onClick={increaseRight}>right</button>
      {click.right}

      {/* <p>{allClicks.join("")}</p> */}

      <p>Total Clicks: {total}</p>
      <History allClicks={allClicks} />
      
      {/* <p>{click.right > 0 && click.left > 0 && click.left / click.right}</p> */}
      {/* <p>{allClicks.length === 0 ? 'Press the button monkey' : allClicks.join("")}</p> */}
      {/* <p>{allClicks.length === 0 && 'Press the button monkey'}</p> */}
    </>
  );
};

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return <div>Pres the buttons to start using the app</div>
  }
  return <div>Button History: {allClicks.join("")}</div>
}

export default App;
