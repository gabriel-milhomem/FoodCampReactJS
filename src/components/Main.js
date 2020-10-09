import React from "react";
import Product from "./Product";

export default function Main(props) {
    var {increment, decrement, allItem, newItems} = props;
    var titles = ["Primeiro, seu prato", "Agora, sua bebida", "Por fim, sua sobremesa"];

    return (
        <main>
            {allItem.map((section, i) => (
                <section>
                    <h1> {titles[i]} </h1>

                    <div className= "products">
                        {section.items.map(item => (
                            <Product 
                                increment = {increment}
                                decrement = {decrement}
                                newItems = {newItems}
                                item = {item}
                            />
                        ))}
        
                        <div class= "space"> </div>
                    </div>
                </section>
            ))}
        </main>
    );
}
