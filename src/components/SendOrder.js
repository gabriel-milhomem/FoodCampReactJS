import React from "react";

export default function SendOrder() {
    return (
        <div className= "revise">
            <h1> Revise seu pedido </h1>

            <div className= "data-order">
                <div> <h3 id= "nome0"> TESTE</h3> <span id= "preco0"> 43</span> </div>
                <div> <h3 id= "nome1"> TESTE</h3> <span id= "preco1"> 23</span> </div>
                <div> <h3 id= "nome2"> TESTE</h3> <span id= "preco2"> 15</span> </div>
                <div> <h1 id= "nomeTotal"> TOTAL </h1> <span id= "total"> 234</span> </div>
            </div>
        
            <button className= "certo" onclick= "pedir(true)"> Tudo certo, pode pedir! </button>
            <button className= "cancelar" onclick= "clickCancelar()"> Cancelar </button>
            <ion-icon onclick= "voltarTela()" id= "iconeVoltar" name="arrow-back-circle-outline"> </ion-icon>
        </div>
    );
}