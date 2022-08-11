import KanbanBoard from "../components/kanbanBoard/kanbanBoard";
import NavBar from "../components/navBar";
import "./style.css";

export default function KanbanPage() {
    return (
        <div className="kanban-page">
            <NavBar></NavBar>
            <div className="main">
                <div className="nav-buttons">
                    <button>Kanban</button>
                    <button>Canceled Tasks</button>
                </div>
                <KanbanBoard className="board"/>
            </div>
        </div>
    )
}
