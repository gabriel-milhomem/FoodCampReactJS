import React from "react";

export default function Footer({button, transition}) {
    var condition = button.indexOf(false) === -1;
    var classButton = (condition) ? "green-button": "";
    var textButton = (condition) ? <span> Revise seu pedido </span>: <span> Selecione os 3 itens <br /> para fechar o pedido </span>;

    return (
        <footer>
            <button type= "button" onClick = {transition} disbled= {condition} className= {classButton} id= "botao"> {textButton} </button>
        </footer>
    );
}