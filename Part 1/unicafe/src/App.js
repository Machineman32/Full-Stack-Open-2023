import {useState} from "react";
import Statistics from "./Statistics";
import Button from "./components/Button";

function App() {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    function increaseGood() {
        setGood(good+1)
    }

    function increaseBad() {
        setBad(bad+1)
    }

    function increaseNeutral() {
        setNeutral(neutral+1)
    }

    const all = good + neutral + bad
    const average = (good+neutral+bad)/3
    const positive = `${(100*good)/all}%`

  return (
    <div className="App">
        <h1>give feedback</h1>
        <Button
            name={'Good'}
            click={increaseGood}
        />
        <Button
            name={'Neutral'}
            click={increaseNeutral}
        />
        <Button
            name={'Bad'}
            click={increaseBad}
        />
        <h1>Statistics</h1>
        {all > 0 ?
            <Statistics
                all={all}
                average={average}
                positive={positive}
                good={good}
                bad={bad}
                neutral={neutral}
            />
            :
            <p>No feedback yet</p>
        }
    </div>
  );
}

export default App;
