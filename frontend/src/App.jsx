import React, { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

function App() {
  const [counter,setCounter] = useState(0)
  var a= 0
  const postTime = async()=>{
    if (a === 0) a = performance.now() / 1000; 
    await axios.post('http://localhost:3200',{time:a,count:counter})
  }
   
  useEffect(() => {
    let startTime = performance.now()/1000

     function handleVisibilityChange () {
      if(document.visibilityState === 'visible') {
         startTime = performance.now()/1000
      }
      if (document.visibilityState === 'hidden') {
        var endTime = performance.now()/1000
        const timeElapsed = endTime - startTime
        a = a + (timeElapsed)
        console.log(timeElapsed,a)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    async function beforeunload(e){
      e.preventDefault();
     
      setCounter( counter)
       
    }
    window.addEventListener('beforeunload', beforeunload);
    return () => {

      window.removeEventListener('beforeunload', beforeunload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(()=>{
    // postTime(counter)

    return () =>{
      postTime()
    }
  },[counter])

  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
    </div>
  );
}

export default App