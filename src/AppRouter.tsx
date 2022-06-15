import React from "react";
import { Route, Routes } from "react-router-dom";

import { paths } from "./allPaths";
import Login from "./pages/Login";



function AppRouter() {
    return (
        <>
            <Routes>
                <Route
                    path={paths.LOGIN}
                    element={
                    <Login/>
                }
                />

            </Routes>

        </>

    );
}

export default AppRouter;