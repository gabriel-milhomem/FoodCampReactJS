import React from "react";
import Section from "./Section";
import products from "./Data.js";

export default function Catalogue() {
    return (
        <main>
            {products.map(typeSection => {
                return <Section section= {typeSection} />
            })}
        </main>
    );
}
