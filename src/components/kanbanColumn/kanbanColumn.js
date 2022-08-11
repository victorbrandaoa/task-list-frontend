import React from "react";
import TaskCard from "../taskCard/taskCard";
import './style.css';

export default function KanbanColumn({ name, tasks }) {
    return (
        <div className="kanban-column">
            <div className="column-title">
                <h2>{name}</h2>
            </div>

            <div className="task-list">
                {tasks.map((task) => (
                    <TaskCard info={task} />
                ))}
            </div>
        </div>
    )
}
