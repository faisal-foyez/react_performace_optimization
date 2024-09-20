import VideoPlayer from './components/VideoPlayer';
import './App.css'
import { useState } from 'react';
import AdjustState from './components/AdjustState';
function App() {
 
  
  const [items, setItems] = useState(['Jamal','Kamal', 'Rahim']);
  return (
    <>
      <button onClick={() => setItems(['John','Jack','Jill'])}>
        Change John
      </button>
      <button onClick={() => setItems(['Jamal','Kamal', 'Rahim'])}>
        Change Jamal
      </button>
      <AdjustState items={items}/>
    </>
  );
  
}

export default App
