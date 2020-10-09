import React from "react";

export default function SendOrder({allItem}) {
    var total = 0;
    var selected = [];

    allItem.forEach(section => {
        var newArray = section.items.filter(item => item.clicked === true);
        selected = [...newArray, ...selected];
    });

    console.log(selected);

    return (
        <div className= "revise">
            <h1> Revise seu pedido </h1>

            <div className= "data-order">
                {selected.map(item => {

                    //console.log(item);
                    //console.log("NOME", item.name);
                    //console.log("QUANTID", item.quantity)
                    var priceItem = (parseFloat(item.price) * parseFloat(item.quantity)).toFixed(2);
                    //console.log("Preco", item.price);
                    total += priceItem;
                    return (
                        <div> 
                            <h3> {item.name} <strong> {`(${item.quantity} un)`} </strong> </h3> 
                            <span> {`R$ ${priceItem}`} </span> 
                        </div>
                    );
                })}

                <div className= "divTotal"> <h1> Total </h1> <span> {`R$ ${total}`} </span> </div>
            </div>
        
            <button className= "green-button"> Tudo certo, pode pedir! </button>
            <button className= "cancel"> Cancelar </button>
        </div>
    );
}