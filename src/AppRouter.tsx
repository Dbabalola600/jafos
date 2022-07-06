import React from "react";
import { Route, Routes } from "react-router-dom";

import { paths } from "./allPaths";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Checkout from "./pages/Checkout";

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

                <Route
                path={paths.CREATE_ACCOUNT}
                element={<CreateAccount/>}
                />

                <Route
                path={paths.CHECKOUT}
                element={<Checkout/>}
                />

            </Routes>

        </>

    );
}

export default AppRouter;