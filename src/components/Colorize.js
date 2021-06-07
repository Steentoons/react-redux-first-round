import React from "react"
import { store } from "../actions"
import { useSelector } from "react-redux"

import { colorRed } from "../actions"
import { colorBlue } from "../actions"
import { colorGreen } from "../actions"


const Colorize = () => {

    const redClick = () => {
        store.dispatch(colorRed())
    }

    const blueClick = () => {
        store.dispatch(colorBlue())
    }

    const greenClick = () => {
        store.dispatch(colorGreen())
    }

    const currentColor = useSelector( state => state.color)

    console.log(currentColor)

    return (
        <div>
        <h1 style={{background: currentColor}}>This color changes to the color of the clicked button </h1>
        <button id="red" onClick={redClick}>RED</button>
        <button id="blue" onClick={blueClick}>BLUE</button>
        <button id="green" onClick={greenClick}>GREEN</button>
    </div>
    )
}

export default Colorize