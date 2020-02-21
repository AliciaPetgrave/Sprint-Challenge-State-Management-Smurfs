import React, {useContext, useState} from 'react'
//smurfcontext provider
import {SmurfContext} from "../contexts/SmurfContext"

export default function SmurfForm(){
    //newsmurfs state
    const [newSmurf, setNewSmurf] = useState(
        {
            name: '',
            age: '',
            height:''
        }
    )
    
    //postrequest function    
    const {New} = useContext(SmurfContext)

    const handleChanges = e =>{
        setNewSmurf({...newSmurf, [e.target.name]: [e.target.value]})
    }

    const handleSubmit = () =>{
        New(newSmurf)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text"
                name="name"
                value={newSmurf.name}
                onChange={handleChanges}
                placeholder="name"></input>

                <label>Age</label>
                <input type="text"
                name="age"
                value={newSmurf.age}
                onChange={handleChanges}
                placeholder="age"></input>

                <label>Height</label>
                <input type="text"
                name="height"
                value={newSmurf.height}
                onChange={handleChanges}
                placeholder="height"></input>
            </form>

            <button onClick={handleSubmit}>Add Smurf</button>
        </div>
    )




}