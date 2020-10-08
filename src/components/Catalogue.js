import React from "react";
import Section from "./Section";
import products from "./Data.js";

export default function Catalogue() {
    var titles = ["Primeiro, seu prato", "Agora, sua bebida", "Por fim, sua sobremesa"];
    return (
        <main>
            {products.map((typeSection, i) => {
                return <Section section= {typeSection} title= {titles[i]} />
            })}
        </main>
    );
}
