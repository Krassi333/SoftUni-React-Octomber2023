import { useState } from "react";

export default function Timer(props) {
const [time,setTime]=useState(props.startTime); //0 - Първоначална стойност 

    //console.log(`Current time is ${time}`);

    setTimeout(() => {
        setTime(time+1);
       // console.log(`Current time is ${time}`);
    }, 1000);

    return (
        <div>
            <h2>Timer</h2>
            <p>{time}</p>
        </div>
    )
}