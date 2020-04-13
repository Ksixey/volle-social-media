import React from "react";
import ReactDOM from "react-dom";
import AppNetwork from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<AppNetwork/>, document.getElementById('root'));

serviceWorker.unregister()




