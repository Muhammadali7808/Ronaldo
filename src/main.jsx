import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TodoProviders } from "./provider/todo_provider/todo_provider.jsx";

createRoot(document.getElementById("root")).render(
  <TodoProviders>
    <App />
  </TodoProviders>
);
