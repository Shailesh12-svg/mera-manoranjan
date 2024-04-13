import React, { useEffect, useRef, useState } from 'react'
import './demo.css';




const Demo2 = () => {
    const [y,sety]=useState(0);
    let x=10;
    
    //use Ref
    const ref = useRef(0);
    const i = useRef(null)
    useEffect(()=>{

        i.current= setInterval(()=>{console.log('Namaste react',Math.random())},1000)


       return ()=>clearInterval(i.current);

    },[])
  return (
    <div className='demo2'>
        <div>
            <h1>Let ={x}</h1>
            <button onClick={()=>
            x=x+1}>Increment</button>
        </div>
        <div>
            <h1>State ={y}</h1>
            <button onClick={()=>
            sety(y+1)}>Increment</button>
        </div>
        <div>
            <h1>Ref ={ref.current}</h1>
            <button onClick={()=>
            ref.current=ref.current+1}>Increment REF</button>
        </div>
        <button onClick= {()=>{
            clearInterval(i);
        }}>Stop Printing</button>
        </div>
  )
}

export default Demo2;

