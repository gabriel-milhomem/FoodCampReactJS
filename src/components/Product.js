import React from "react";

export default function Product(props) {
    var {type, image, name, price, text} = props;
    var [selected, setSelected] = React.useState(false);
    var [numItem, setNumItem] = React.useState(1);
    var articleClass = selected ? `${type} green-border`: type;
    var counterClass = selected ? "counter show": "counter";

    function decrement(event) {
        var num = numItem - 1;

        if (num === 0) {
            event.stopPropagation();
            setSelected(false);
            setNumItem(1);
            return ;
        }

        setNumItem(num);
    }

    return (
        <article className= {articleClass} onClick= {() => setSelected(true)}> 
            <img src= {`./images/${type}/${image}`} alt= {name} />
            <h2> {name} </h2>
            <p> {text} </p>
            <div className= "price">
                <span> {`R$ ${price}`} </span>

                <div className= {counterClass}>
                    <span className= "minus" onClick= {(event) => decrement(event)}> - </span>
                    <strong> {numItem} </strong>
                    <span className= "add" onClick= {() => setNumItem(numItem + 1)} > + </span>
                </div>
            </div>
        </article>
    );
}