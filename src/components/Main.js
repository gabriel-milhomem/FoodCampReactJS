import React from "react";
import Product from "./Product";

export default function Main(props) {
    var {increment, decrement, allItem, newItems} = props;
    var titles = ["Primeiro, seu prato", "Agora, sua bebida", "Por fim, sua sobremesa"];

    return (
        <main>
            {allItem.map((section, i) => (
                <section key= {i}>
                    <h1> {titles[i]} </h1>

                    <div className= "products">
                        {section.items.map((item, i) => (
                            <Product 
                                increment = {increment}
                                decrement = {decrement}
                                newItems = {newItems}
                                item = {item}
                                key= {i}
                            />
                        ))}
        
                        <div className= "space"> </div>
                    </div>
                </section>
            ))}
        </main>
    );
}
