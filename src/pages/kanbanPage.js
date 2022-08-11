import React, { useState, useEffect } from "react";

import KanbanBoard from "../components/kanbanBoard/kanbanBoard";
import NavBar from "../components/navBar";
import "./style.css";

const kanbanModel = {
    "backlog": [{name: "teste", kind: "testekind" }],
    "inProgress": [],
    "finished": [{name: "teste", kind: "testekind" }]
};

const kanbanCanceledModel = {
    "canceled": []
};

export default function KanbanPage() {
    const [kanban, setKanban] = useState(kanbanModel);
    const [kanbanType, setKanbanType] = useState("normal");

    const changeBoard = (tipoKanban="normal")  => {
        if (tipoKanban === "canceled") {
            setKanban({ ...kanbanCanceledModel });
            setKanbanType("canceled");
        } else {
            setKanban({ ...kanbanModel });
            setKanbanType("normal");
        };
    }

    return (
        <div className="kanban-page">
            <NavBar />
            <div className="main">
                <div className="nav-buttons">
                    <button disabled={kanbanType === "normal"} onClick={() => changeBoard()}> Kanban </button>
                    <button disabled={kanbanType === "canceled"} onClick={() => changeBoard("canceled")}>Canceled Tasks</button>
                </div>
                <div  className="board">
                    <KanbanBoard kanban={kanban} />
                </div>
            </div>
        </div>
    )
}
