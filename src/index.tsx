import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/sidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <aside className="left">
          <Sidebar />
        </aside>

        <main className="center">
          <h1>Main Content</h1>
        </main>

        <aside className="right">
          <RightSidebar />
        </aside>
      </div>
    </BrowserRouter>
  );
}

export default App;
