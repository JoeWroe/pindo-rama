import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path='/' render={() => (<Homepage/>)} />
            </div>
        </BrowserRouter>
    )
}

export default App;
