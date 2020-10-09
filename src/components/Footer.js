import React from "react";
import {Link} from "react-router-dom";

export default function Footer({button, transition}) {
    var condition = button.indexOf(false) === -1;
    var disabled = (condition) ? "": "disabled-link";
    var classButton = (condition) ? "green-button": "";
    var textButton = (condition) ? <span> Revise seu pedido </span>: <span> Selecione os 3 itens <br /> para fechar o pedido </span>;

    return (
        <footer>
            <button type= "button" className= {classButton}>
                <Link className= {disabled} to= "/review"> {textButton} </Link> 
            </button>
        </footer>
    );
}
