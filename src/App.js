import "./css/color.css"
import React from 'react';
import Colorize from "./components/Colorize"
import { Provider } from "react-redux"

import {store} from "./actions"

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Colorize />
      </div>
    </Provider>
  ); 
}

export default App;
