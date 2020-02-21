import React, {useContext} from 'react'
//cardcontext
import {SmurfContext} from '../contexts/SmurfContext'

//displays current smurfs
export default function SmurfCard() {

const {smurfs} = useContext(SmurfContext)

    return (
        <div className="allsmurfs">
            {/* <p>this is the smurf card</p> */}

            {smurfs.map(item => {
                return (
                    <div className="eachsmurf">
                    <h3>{item.name}</h3>
                    <p>{item.age}</p>
                    <p>{item.height}</p>
                    </div>
                )
            })}
        </div>
    )
}