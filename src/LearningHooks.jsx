import React, { useEffect, useState } from 'react'

const LearningHooks = () => {
    const [count,setCount]=useState(0);
    const [calc,setCalc]=useState(0);

    useEffect(()=>{
        setCalc(()=>count * 2);
    },[count]);

    return (
        <div className='LearningHookscontainer'>
            <button onClick={()=>setCount((c)=>c+1)}>+</button>
            <p>Count : {count}</p>
            <p>Calculation : {calc}</p>
        </div>
    )
}

export default LearningHooks
