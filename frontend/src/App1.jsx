const postTime = async(a)=>{
    
    await axios.post('http://localhost:3200',{time:a})
  }

window.addEventListener('beforeunload',async (event) => {
    await localStorage.setItem('end', ( Date.now() - localStorage.getItem('start'))/1000);
    await postTime(a)

  });