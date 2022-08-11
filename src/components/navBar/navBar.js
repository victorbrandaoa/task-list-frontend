import React from "react";
import './style.css';

export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <h1>My Categories</h1>
            <div className="categories">
                <h3>Garduation</h3>
                <h3>Project</h3>
            </div>
        </div>
    )
}
