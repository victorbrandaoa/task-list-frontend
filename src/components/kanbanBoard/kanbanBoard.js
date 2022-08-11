import React from "react";
import KanbanColumn from "../kanbanColumn/kanbanColumn";
import './style.css';

export default function KanbanBoard(props) {
    return (
        <div className="kanban-board">
            <KanbanColumn />
            <KanbanColumn />
            <KanbanColumn />
        </div>
    )
}
