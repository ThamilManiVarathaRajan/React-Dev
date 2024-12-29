import React, { useState } from 'react'

const ButtonColorChange = () => {
    const [red,setRed]=useState('lightpink');
    const [blue,setBlue]=useState('lightblue');
    const [Green,setGreen]=useState('lightgreen');
    const [Yellow,setYellow]=useState('lightyellow');

    function RedColor(colors){
        setRed(colors);
        setBlue(colors);
        setGreen(colors);
        setYellow(colors);
        if(colors==='lightpink')
            setRed('white');
        if(colors==='lightblue')
            setBlue('white');
        if(colors==='lightgreen')
            setGreen('white');
        if(colors==='lightyellow')
            setYellow('white');
    }

  return (
    <div className='LearningHookscontainer'>
      <button onClick={()=>RedColor('lightpink')} style={{backgroundColor:red}}>lightpink</button>
      <button onClick={()=>RedColor('lightblue')} style={{backgroundColor:blue}}>Blue</button>
      <button onClick={()=>RedColor('lightgreen')} style={{backgroundColor:Green}}>Green</button>
      <button onClick={()=>RedColor('lightyellow')} style={{backgroundColor:Yellow}}>Yellow</button>
    </div>
  )
}

export default ButtonColorChange
