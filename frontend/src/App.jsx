import React, { useEffect } from 'react';
import axios from 'axios'

function App() {
  var a= 0
  const postTime = async()=>{
    await axios.post('http://localhost:3200',{time:a})
  }
   
  useEffect(() => {
    var startTime = performance.now()/1000

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
      await postTime()
    }
    window.addEventListener('beforeunload', beforeunload);
    return () => {
      window.removeEventListener('beforeunload', beforeunload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div>
    </div>
  );
}

export default App