import React from "react";
import Form from "../components/pages/login/Form";
import Header from "../components/pages/login/Header";


// layout
import DefaultLayout from "../components/layout/DefaultLayout";


function Login() {
    return (
        // add layout here
        <DefaultLayout>
            <div className="md:px-20">
                <Header />
                <Form />
            </div>
        </DefaultLayout>

    );
}

export default Login;