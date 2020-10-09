import React from "react";
import {Link} from "react-router-dom";
import getDataSet from "./Data.js";

export default function Review(props) {
    var {allItem, setAllItem, setButtonActivate} = props;
    var total = 0;
    var selected = [];

    allItem.forEach(section => {
        var newArray = section.items.filter(item => item.clicked === true);

        selected = [...selected, ...newArray];
    });

    function sendMessage() {
        var message = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n*Olá*, gostaria de fazer o *pedido*: \n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n";

        selected.forEach(item => {
            var priceItem = (item.price * item.quantity).toFixed(2);
            message += `*- R$ ${priceItem.replaceAll('.', ',')}* ----> ${item.name} *(${item.quantity} un)* !\n`;
            total = total + parseFloat(priceItem);
        });

        message += `*- Total* --------> *R$ ${total.toFixed(2).replaceAll('.', ',')}* !\n`;
        message += "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-";

        message = encodeURIComponent(message);
        window.open("https://api.whatsapp.com/send?phone=5562984224182&text=" + message, "_blank");
    }

    function resetSite() {
        setAllItem(getDataSet());
        setButtonActivate([false, false, false]);
    }

    return (
        <div className= "revise">
            <h1> Revise seu pedido </h1>

            <div className= "data-order">
                {selected.map((item, i) => {
                    var priceItem = (item.price * item.quantity).toFixed(2);
                    total = total + parseFloat(priceItem);
                    return (
                        <div key= {i}> 
                            <h3> {item.name} <strong> {`(${item.quantity} un)`} </strong> </h3> 
                            <span> <strong> {`R$ ${priceItem}`} </strong> </span>
                        </div>
                    );
                })}

                <div className= "divTotal"> 
                    <h1> Total </h1>
                    <span> <strong> {`R$ ${(total).toFixed(2)}`} </strong> </span>
                </div>
            </div>
        
            <button onClick = {sendMessage} className= "green-button"> Tudo certo, pode pedir! </button>

            <button className= "cancel" onClick= {resetSite}> 
                <Link to= "/"> Cancelar </Link> 
            </button>
        </div>
    );
}
