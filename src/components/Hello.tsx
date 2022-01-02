import { Agent } from 'http';
import { FC, useState } from 'react'

interface HelloProps{
    myName: string;
    age?: number;
}



const Hello: FC<HelloProps> = ({ myName, age})=>{
    const [counter, setCounter] = useState<number>(0);

    function updateCounter(){
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>
            Hello { myName } your age is { age ?  age : 'unknown'  } 
            </h1>
            <br/>
            <p>
            the counter is : { counter} <br/>
            <button onClick={ updateCounter}>increase counter </button>
            </p>
        </div>
    )
}

export default Hello;