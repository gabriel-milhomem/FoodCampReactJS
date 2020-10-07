import React from "react";

export default function Product(props) {
    var {type, image, name, price, text} = props;
    var [selected, setSelected] = React.useState(false);
    var articleClass = selected ? `${type} green-border`: type;
    var counterClass = selected ? "counter show": "counter";

    return (
        <article className= {articleClass} onClick= {() => setSelected(true)}> 
            <img src= {`./images/${type}/${image}`} alt= {name} />
            <h2> {name} </h2>
            <p> {text} </p>
            <div className= "price">
                <span> {`R$ ${price}`} </span>

                <div className= {counterClass}>
                    <span className= "minus"> - </span>
                    <strong> 0 </strong>
                    <span className= "add"> + </span>
                </div>


            </div>
            
        </article>
    );
}