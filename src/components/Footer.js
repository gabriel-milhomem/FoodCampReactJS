import React from "react";

export default function Footer({button}) {
    var condition = button.indexOf(false) === -1;
    var classButton = (condition) ? "green-button": "";
    var textButton = (condition) ? <span> Revise seu pedido </span>: <span> Selecione os 3 itens <br /> para fechar o pedido </span>;
    
    function transitionScreen() {
        document.querySelector("main").classList.add("ocultar");
        document.querySelector(".revise").classList.add("aparecer");
        document.querySelector("footer").classList.add("ocultar");
    }
    

    return (
        <footer>
            <button type= "button" onClick = {transitionScreen} disbled= {condition} className= {classButton} id= "botao"> {textButton} </button>
        </footer>
    );
}