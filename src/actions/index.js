import { createStore } from "redux"

export const colorObj = {
    color: "blue"
}


//Action
export const colorRed = () => {
    return ({
        type: "RED"
    })
}

export const colorBlue = () => {
    return ({
        type: "BLUE"
    })
}

export const colorGreen = () => {
    return ({
        type: "GREEN"
    })
}


//Reducer
export const colorReducer = (colorObj, action) => {
    switch (action.type) {
        case "RED":
            return {
                ...colorObj,
                color: "red"
            }

        case "BLUE":
            return {
                ...colorObj,
                color: "blue"
            }

        case "GREEN":
            return {
                ...colorObj,
                color: "green"
            }

        default:
            return colorObj

    }
}

export const store = createStore(
    colorReducer,
    colorObj,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//Dispatch
// store.dispatch(colorAction())