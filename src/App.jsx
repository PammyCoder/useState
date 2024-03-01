import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const  Add= () =>{
setCount(count+1);
  };
  const  Delete= () =>{
    setCount(count-1);
      };

  return (
 <>
    <h1>CURD OPERATIONS</h1>
    <button onClick={Add}>Add Items</button>
<input type="text" value={count} />  <button onClick={Delete}>Delete Items</button>
  </>
  )
  }
export default App
