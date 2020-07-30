import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import routes from "../routes";
import configureStore from "../store";

const App = () => {
    return (
        <Provider store={configureStore()}>
            <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </Provider>
    );
};

ReactDOM.hydrate(<App/>, document.getElementById("root"));
