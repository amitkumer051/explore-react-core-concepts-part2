import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const hanleAdd=()=>{
        const newCount = count+1;
        setCount(newCount);
    }
    const handleReduce=()=>{
        const reduce = count -1;
        setCount(reduce);
    }
    return (
        <div style={{border:'2px solid blue',borderRadius:'20px',padding:'10px'}}>
            <h3>Counter:{count}</h3>
            <button onClick={hanleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}