import { useEffect, useState } from "react"
import { getDog } from "./apiCalls";
import './App.css';

function App() {
  const [dog, setDog] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const getData = async() => {
      try {
      const data = await getDog();
      setDog(data.message)
    } catch (error) {
      setError(error.message)
      console.log("ERROR")
    }
    }
    getData()
  },[])

  const handleClick = async () => {
    try {
      const data = await getDog();
      setDog(data.message)
    } catch (error) {
      setError(error.message)
      console.log("ERROR")
    }
  }


  return (
    <div className="App">
      <button onClick={handleClick}>get dog</button>
      {error && <p>something went wrong!</p>}
      {dog && <img alt="dog pic" src={dog}></img>}
    </div>
  );
}

export default App;
