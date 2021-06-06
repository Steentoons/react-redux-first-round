import { createStore } from "redux"


  //Action
  export const colorAction = () => {
    return ({
      type: "COLORIZE"
    })
  }


  //Reducer
  export const colorReducer = (state = 0, colorAction) => {
    switch(colorAction.type) {
        case "COLORIZE":
            return state + 1
        default:
            return state   

    }
  }

  export const store = createStore(
      colorReducer, 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )

  //Dispatch
  store.dispatch(colorAction())

  