import React from "react"
import Navbar from "./components/Navbar"
import Components from "./components/Components"
import data from "./data"
function App() {

  const myData = data.map(item => {
    return <Components 
      key = {item.id}
      {...item}
    />
  })
  return (
    <main className="container">
     <Navbar />
     {myData}
    </main>
  )
}

export default App
