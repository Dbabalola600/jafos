import React from "react";
import Header from "../components/pages/student/checkout/Header";
import Details from "../components/pages/student/checkout/Details";


import DefaultLayout from "../components/layout/DefaultLayout";


function Checkout() {

    return (
        <DefaultLayout>
            <div className="md:px-20">
                <Header />
                <Details/>
            </div>
        </DefaultLayout>
    )

}

export default Checkout;