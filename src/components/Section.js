import React from "react";
import Product from "./Product";

export default function Section({section}) {
    return (
        <section>
            <h1> </h1>
            <div className= "produtos">
                {section.map(item => (
                    <Product 
                        type= {item.type}
                        image= {item.image}
                        name= {item.name}
                        price= {item.price}
                        text= {item.text}
                    />
                ))}

                <div class= "espaco"> </div>
            </div>
        </section>
    );
}