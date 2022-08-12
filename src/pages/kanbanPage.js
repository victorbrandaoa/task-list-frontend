import React, { useState } from "react";

import KanbanBoard from "../components/kanbanBoard/kanbanBoard";
import NavBar from "../components/navBar";
import "./style.css";

// this data is mock
const kanbanBoardData = {
    "backlog": [
        {name: "task3", kind: "planning" },
        {name: "task4", kind: "presenting" }
    ],
    "inProgress": [
        {name: "task2", kind: "testing" },
        {name: "task6", kind: "development" }
    ],
    "finished": [
        {name: "task1", kind: "development" }
    ]
};

const canceledTasksData = {
    "canceled": [
        {name: "task5", kind: "modelling" }
    ]
}

export default function KanbanPage() {
    const [kanban, setKanban] = useState(kanbanBoardData);
    const [kanbanType, setKanbanType] = useState("normal");

    const changeBoard = (tipoKanban="normal")  => {
        if (tipoKanban === "canceled") {
            setKanban({ ...canceledTasksData });
            setKanbanType("canceled");
        } else {
            setKanban({ ...kanbanBoardData });
            setKanbanType("normal");
        };
    }

    return (
        <div className="kanban-page">
            <NavBar />
            <div className="main">
                <div className="nav-buttons">
                    <button disabled={kanbanType === "normal"} onClick={() => changeBoard()}>Kanban</button>
                    <button disabled={kanbanType === "canceled"} onClick={() => changeBoard("canceled")}>Canceled Tasks</button>
                </div>
                <div  className="board">
                    <KanbanBoard kanban={kanban} />
                </div>
            </div>
        </div>
    )
}
