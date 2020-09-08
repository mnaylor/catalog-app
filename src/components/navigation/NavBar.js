import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/patterns">Patterns</Link></li>
                <li><Link to="/fabric">Fabric</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;