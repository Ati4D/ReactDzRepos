import React, { useState } from 'react';
import Count from './Count';
import IsFive from './IsFive';

const Counters = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div>
            
            <div>
                <button onClick={()=>setCount1(count1+1)}>+</button>
                <Count value={count1} id={1}/>
                <button onClick={()=>setCount1(count1-1)}>-</button>
            </div>

            <div>
                <button onClick={()=>setCount2(count2+1)}>+</button>
                <Count value={count2} id={2}/>
                <IsFive value={count2}/>
                <button onClick={()=>setCount2(count2-1)}>-</button>
            </div>

        </div>
    );
}

export default Counters;
