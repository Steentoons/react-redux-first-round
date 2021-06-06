import React from "react"
import { store } from "../actions"

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

    return (
        <div>
        <h1>This is my state </h1>
        <button id="red" onClick={redClick}>blue</button>
        <button id="blue" onClick={blueClick}>BLUE</button>
        <button id="green" onClick={greenClick}>GREEN</button>
    </div>
    )
}

export default Colorize