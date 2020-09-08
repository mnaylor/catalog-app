import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from "./components/views/Home";
import PatternSearch from "./components/views/PatternSearch";
import FabricSearch from "./components/views/FabricSearch";
import NavBar from "./components/navigation/NavBar";
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                    <Route exact path="/" component={Home} />
                    <Route path="/patterns" component={PatternSearch} />
                    <Route path="/fabric" component={FabricSearch} />
            </div>
        </Router>
    );
}

export default App;
