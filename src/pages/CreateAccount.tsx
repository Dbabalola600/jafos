import React from "react";
import Header from "../components/pages/student/createaccount/Header";
import Form from "../components/pages/student/createaccount/Form";

// layout
import DefaultLayout from "../components/layout/DefaultLayout";


function CreateAccount() {
    return (
        // add layout here
        <DefaultLayout>
            <div className="md:px-20">
                <Header />
                <Form/>
            </div>
        </DefaultLayout>

    );
}

export default CreateAccount;