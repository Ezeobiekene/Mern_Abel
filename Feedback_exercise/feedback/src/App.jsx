import { useState } from "react";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const increaseGood = () => {
    let newFeedback = {
      ...feedback,
      good: feedback.good + 1,
    };
    setFeedback(newFeedback);
  };
  const increaseNeutral = () => {
    let newFeedback = {
      ...feedback,
      neutral: feedback.neutral + 1,
    };
    setFeedback(newFeedback);
  };
  const increaseBad = () => {
    let newFeedback = {
      ...feedback,
      bad: feedback.bad + 1,
    };
    setFeedback(newFeedback);
  };

  return (
    <>
      <h1>Feedback</h1>
      <button onClick={increaseGood}>good</button>
      <button onClick={increaseNeutral}>neutral</button>
      <button onClick={increaseBad}>bad</button>

      <h1>Stats</h1>
      <Stats good={feedback.good} neutral={feedback.neutral} bad={feedback.bad}/>


      {/* <p>good {feedback.good}</p>
      <p>neutral {feedback.neutral}</p>
      <p>bad {feedback.bad}</p> */}
    </>
  );
};

const Stats = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>
  }
  return (<>
    <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
  </>)
}

export default App;
