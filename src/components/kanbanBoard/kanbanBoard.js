import React from "react";
import KanbanColumn from "../kanbanColumn/kanbanColumn";
import './style.css';

export default function KanbanBoard({ kanban }) {
    return (
        <div className="kanban-board">
            {Object.entries(kanban).map(([column, tasks]) => (
                <KanbanColumn name={column} tasks={tasks} />
            ))}
        </div>
    )
}
