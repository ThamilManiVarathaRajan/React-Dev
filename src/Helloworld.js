import React from 'react'
import { useState } from 'react';

const Helloworld = () => {

    const [count,setCount] = useState(109);

    function handleClick(){        
        setCount(count + 1);        
    }

    return (
        <div>
            <button onClick={handleClick}>
                counting {count} Number's
            </button>
            <h1>{count}</h1>
        </div>
    );
}

export default Helloworld
