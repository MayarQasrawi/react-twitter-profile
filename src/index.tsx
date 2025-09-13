import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/sidebar";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
