import React, { useState } from 'react';
function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-1 px-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-400 px-3 py-2 rounded-full">
        <button onClick={()=>setColor('red')} className="outline-double px-10 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} >Red</button>

        <button onClick={()=>setColor('blue')}   className="outline-double px-10 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} >Blue</button>
        <button onClick={()=>setColor('pink')} className="outline-double px-10 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}} >Pink</button>
        <button onClick={()=>setColor('green')} className="outline-double px-10 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} >Green</button>
        <button onClick={()=>setColor('violet')} className="outline-double px-10 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"violet"}} >Violet</button>
        <button onClick={()=>setColor('black')} className="outline-double px-10 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Black"}} >Black</button>
        <button onClick={()=>setColor('purple')} className="outline-double px-10 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple" }} >Purple</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
