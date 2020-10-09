import React from "react";

export default function Product(props) {
    var {increment, decrement, item, newItems} = props;
    var articleClass = (item.clicked) ? `green-border`: '';
    var counterClass = (item.clicked) ? "counter show": "counter";

    return (
        <article className= {articleClass} onClick= {() => newItems(item)}> 
            <img src= {`./images/${item.image}`} alt= {item.name} />
            <h2> {item.name} </h2>
            <p> {item.text} </p>
            <div className= "price">
                <span> {`R$ ${item.price}`} </span>

                <div className= {counterClass}>
                    <span className= "minus" onClick= {(event) => decrement(event, item)}> - </span>
                    <strong> {item.quantity} </strong>
                    <span className= "add" onClick= {() => increment(item)} > + </span>
                </div>
            </div>
        </article>
    );
}