import React, {useState, useEffect} from "react";
import axios from "axios"

//contexts
import {SmurfContext} from '../contexts/SmurfContext'

//components
import SmurfForm from './SmurfForm'
import SmurfCard from './SmurfCard'

import "./App.css";


export default function App() {
  //current smurfs state
  const [smurfs, setSmurfs] = useState([]);

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

  //post request
  const New = smurf => {
    axios.post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      console.log(response)
      setSmurfs(response.data)
    })
    .catch(error => {
      console.log("this is the post", error)
    })
  }


  return (
		<div className="App">
      <h1>Smurfs App</h1>
      <SmurfContext.Provider value={{smurfs, setSmurfs, New}}>
        <SmurfForm />
        <SmurfCard />
      </SmurfContext.Provider>
		</div>
	);
}

