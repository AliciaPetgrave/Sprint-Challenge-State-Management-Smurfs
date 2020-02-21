import React, {useState, useEffect} from "react";
import axios from "axios"

//contexts
import {SmurfContext} from '../contexts/SmurfContext'
import {FormContext} from '../contexts/FormContext'

//components
import SmurfForm from './SmurfForm'
import SmurfCard from './SmurfCard'

import "./App.css";


export default function App() {
  //current smurfs state
  const [smurfs, setSmurfs] = useState([]);
  //new smurfs state
  const [newSmurf, setNewSmurf] = useState(
    {
        name: '',
        age: '',
        height:''
    }
)

  //get request
  useEffect(() => {
    axios.get("http://localhost:3333/smurfs")
    .then(response => {
      console.log(response)
      setSmurfs(response.data)
    })
    .catch(error => {
      console.log("this is the get", error)
    })
  }, [])


  return (
    <div className="App">
      <h1>Smurf App</h1>
    <SmurfContext.Provider value={{smurfs, setSmurfs, setNewsmurf}}>
      <FormContext.Provider>
      <SmurfForm />
      </FormContext.Provider>
    </SmurfContext.Provider>  
    </div>
  )
}

