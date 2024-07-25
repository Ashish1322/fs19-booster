import { useState } from "react"


function App() {
  
  const [data,setData] = useState("")

  const converToUppercase = () => {
    setData(data.toUpperCase())
  }
  const converToLowercase = () => {
    setData(data.toLocaleLowerCase())
  }

  const trimS = () => {
    let temp = data.trim();
    let newArray = temp.split(" ")
    let considerd = []
    for (let item of newArray)
    {
      if(item.length > 0)
      {
        considerd.push(item)
      }
    }

    console.log(considerd)
    setData(considerd.join(' '))

  }

  return (
    <div>
      <h1>Text Area</h1>

      <textarea cols="100"  value={data}  rows="10" onChange={(e) => setData(e.currentTarget.value) }></textarea>

      <button onClick={converToUppercase}>Conver To Upper case</button>
      <button onClick={converToLowercase}>Conver To Lower case</button>
      <button onClick={() => setData("") }>Clear</button>
      <button onClick={() => navigator.clipboard.writeText(data)}>Copy To Clipboared</button>
      <button onClick={trimS}>Trim </button>

    <hr />

    <h1>Preview</h1>
   
    <textarea cols="100"  value={data}  rows="10"  ></textarea>
    <p>Number of words: {data.split(" ").length} </p>
    <p>Number of words: {data.length} </p>
    <p>Avg time to read in seconds: {(data.split(" ").length)/3} </p>


    </div>
  )
}

export default App
