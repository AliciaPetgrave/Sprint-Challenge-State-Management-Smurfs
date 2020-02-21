import React, {useContext, useState} from 'react'
//SMURFCONTEXT PROVIDER
import {SmurfContext} from "../contexts/SmurfContext"

export default function SmurfForm(){

    const {smurfs, newSmurfs, setNewSmurf} = useContext(SmurfContext)



    return (
        <div>
            <p>Smurf Form</p>
            <form>
                <label>Name</label>
                <input type="text"
                name="name"
                placeholder="name"></input>

                <label>Age</label>
                <input type="text"
                name="age"
                placeholder="age"></input>

                <label>Height</label>
                <input type="text"
                name="height"
                placeholder="height"></input>
            </form>

            <button>Add Smurf</button>
        </div>
    )




}