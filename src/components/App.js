import React from "react";
import Header from "./Header";
import Catalogue from "./Catalogue";
import Footer from "./Footer";
import SendOrder from "./SendOrder";

export default function App() {
    return (
        <div id= "interface">
            <Header />
            <Catalogue />
            <Footer />
        </div>
    );
}