import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import {Main} from "./components/Index";
import store from "./store";
import { Provider } from "react-redux";


const container = document.getElementById("root")
const root = createRoot(container)
// const root = createRoot(document.getElementById("app"));

root.render(
        <Router>
                <Provider store={store}>
                        <Main />
                </Provider>
        </Router>
)
