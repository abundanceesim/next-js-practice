"use client";
import { useState } from "react";
export const Counter = () => {
    const [count, setCount] = useState(0);
    console.log('Counter component rendered');
    return (
        <div>
            <button className="bg-sky-500 hover:bg-sky-900 ..." onClick={()=>setCount(count + 1)}>Add 1</button>
            <p>{count}</p>
        </div>
    );
}