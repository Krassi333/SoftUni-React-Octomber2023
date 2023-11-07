import { useState } from "react";

export default function Counter(props) {

    const [counter, setCounter] = useState(0);

    const buttonClickHandlerer = () => {
        setCounter(counter => counter+1);
    }

    return (
        <div>
            <h3>Counter</h3>
            <p>{counter}</p>
            <button onClick={buttonClickHandlerer}>+</button>
            <button onClick={() => setCounter(0)}>Clear</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>

        </div>
    )
}