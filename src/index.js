import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ContextProvider } from "./contexts/ECommContext";
import { useEContext } from "./contexts/ECommContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

export { useEContext };

root.render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        {" "}
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>
);

// React.strict mode renders the component twice to detect if any bugs exists
// so when useEffect runs, it runs twice & console the statement if it's there
