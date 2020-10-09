import React from "react";

export default function getDataSet() {
    var dataSet = [{
        type: "comidas",
    
        items: [{
            image: "comida01.jpg",
            name: "Frango Xadrez",
            price: 19.90,
            text: "Acompanha um pouco de arroz e verdura",
            quantity: 1,
            clicked: false
        }, {
            image: "comida02.jpg",
            name: "Feijoada",
            price: 22.90,
            text: "Acompanha laranja, arroz e farinha",
            quantity: 1,
            clicked: false
        }, {
            image: "comida03.jpg",
            name: "Peixe Grelhado" ,
            price: 25.90,
            text:"Acompanha mandioca frita e salada",
            quantity: 1,
            clicked: false
        }, {
            type: "comidas",
            image: "comida04.jpg",
            name: "Bife de Picanha",
            price: 29.90, 
            text: "Farofa com bacon e batata frita",
            quantity: 1,
            clicked: false
        }]}, {
        
        type: "bebidas",
    
        items: [{
            image: "bebida01.jpg",
            name: "Coca-Cola KS",
            price: 4.90, 
            text: "Bem gelada, 290ml",
            quantity: 1,
            clicked: false
        }, {
            type: "bebidas",
            image: "bebida02.jpeg",
            name: "Suco de Laranja",
            price: 10.90, 
            text: "Da fruta, 1 litro",
            quantity: 1,
            clicked: false
        }, {
            image: "bebida03.jpeg",
            name: "Matte Leão",
            price: 5.90, 
            text: "Chá de limão, 400ml",
            quantity: 1,
            clicked: false
        }, {
            image: "bebida04.jpg",
            name: "Água Mineral",
            price: 2.90, 
            text: "Prata sem gás, 300ml",
            quantity: 1,
            clicked: false
        }]}, {
    
        type: "sobremesas",
    
        items: [{
            image: "sobremesa01.jpg",
            name: "Pudim",
            price: 7.90, 
            text: "Sabor doce de leite",
            quantity: 1,
            clicked: false
        }, {
            image: "sobremesa02.jpg",
            name: "Sorvete",
            price: 6.90, 
            text: "Bola de morango",
            quantity: 1,
            clicked: false
        }, {
            image: "sobremesa03.jpg",
            name: "Brigadeiro",
            price: 13.90, 
            text: "6 unid de brigadeiro",
            quantity: 1,
            clicked: false
    
        }, {
            image: "sobremesa04.jpg",
            name: "Açai c/ granola",
            price: 9.90, 
            text: "Açai na tigela, 300ml",
            quantity: 1,
            clicked: false
        }]}
    ];

    return dataSet;
}
