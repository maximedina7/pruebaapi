import {useEffect, useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/football/passingyards-singleseason');
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setData(err.message);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  const [count, setCount] = useState(0)
  
   return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}


