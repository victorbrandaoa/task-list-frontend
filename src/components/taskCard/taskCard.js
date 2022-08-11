import React from "react";
import './style.css';

export default function TaskCard({ info }) {
    const { name, kind } = info;
    return (
        <div className="task-card">
            <h2>{name}</h2>
            <div className="task-kind">
                {kind}
            </div>
        </div>
    )
}
