import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App2() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Handle the beforeunload event
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // Only add the event listener once

  function handleBeforeUnload(event) {
    // Prevent the default behavior of the event
    event.preventDefault();

    // Make a POST request to the server, sending the updated counter value
    // axios.post('/counter', { counter });
    axios.post('http://localhost:3200',{ counter})
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default App2;
