import React, { useMemo,useState } from 'react'
import '../Datas/demo.css'
import { findPrime } from '../../utils/helper';
function Demo() {
    const [text,setText]=useState(0);
    const [isDarkTheme,setIsDarkTheme]=useState(false);

    console.log('Rendering');
    //Heavy operation will happen when state changes 
    const prime =useMemo(()=>findPrime(text),[text]); //Memoised value
  return (
    <div className={'main2' + (isDarkTheme ? ' main3' : '')}>
        <div>
            <button  className="btn11"onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
        </div>
        <div>
            <input type='number' value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <div>
            <h1>nth prime :{prime}</h1>
        </div>
    </div>
  )
}

export default Demo;