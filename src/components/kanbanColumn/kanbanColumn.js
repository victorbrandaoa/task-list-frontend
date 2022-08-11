import React from "react";
import TaskCard from "../taskCard/taskCard";
import './style.css';

export default function KanbanColumn(props) {
    return (
        <div className="kanban-column">
            <div className="column-title">
                <h2>Backlog</h2>
            </div>

            <div className="task-list">
                <TaskCard />
                <TaskCard />
            </div>
        </div>
    )
}
