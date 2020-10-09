import React from "react";

export default function SendOrder({allItem}) {
    var total = 0;
    var selected = [];
    var message = `Olá, gostaria de fazer o pedido:\n`;

    allItem.forEach(section => {
        var newArray = section.items.filter(item => item.clicked === true);
        selected = [...newArray, ...selected];
    });

    function sendMessege() {
        selected.forEach(item => {
            var priceItem = (item.price * item.quantity).toFixed(2);
            message += `${item.name} (${item.quantity} un) -> R$ ${priceItem} !\n`;
            total = total + parseFloat(priceItem);
        });
        message += `Total -> R$ ${total.toFixed(2)} !`;
        console.log(message);
        message = encodeURIComponent(message);
        window.open("https://api.whatsapp.com/send?phone=5562984224182&text=" + message, "_blank");
    }

    return (
        <div className= "revise">
            <h1> Revise seu pedido </h1>

            <div className= "data-order">
                {selected.map(item => {
                    var priceItem = (item.price * item.quantity).toFixed(2);
                    total = total + parseFloat(priceItem);
                    return (
                        <div> 
                            <h3> {item.name} <strong> {`(${item.quantity} un)`} </strong> </h3> 
                            <span> {`R$ ${priceItem}`} </span> 
                        </div>
                    );
                })}

                <div className= "divTotal"> <h1> Total </h1> <span> {`R$ ${(total).toFixed(2)}`} </span> </div>
            </div>
        
            <button onClick = {sendMessege} className= "green-button"> Tudo certo, pode pedir! </button>
            <button className= "cancel"> Cancelar </button>
        </div>
    );
}