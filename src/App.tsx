import React from "react";
import "./App.css";
import { Notifications } from "./components/Notifications/Index";
import { Pages } from "./routes";
import { BaseStyles } from "./styles/base";

function App() {
    return (
        <>
            {/* styles start */}
            <BaseStyles />
            {/* styles end */}

            <Notifications />
            <div className="App">
                <Pages />
            </div>
        </>
    );
}

export default App;
