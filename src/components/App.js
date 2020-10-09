import React from "react";
import Main from "./Main";
import Footer from "./Footer";

export default function App(props) {
    var {allItem, setAllItem, buttonActivate, setButtonActivate} = props;
    
    function decrement(event, itemClicked) {
        itemClicked.quantity -= 1;

        if (itemClicked.quantity === 0) {
            event.stopPropagation();
            itemClicked.clicked = false;

            buttonChecked();
            setAllItem([...allItem]);
            itemClicked.quantity = 1;
            return ;
        }

        setAllItem([...allItem]);
    }

    function increment(itemClicked) {
        itemClicked.quantity += 1;
    }

    function buttonChecked() {
        allItem.forEach((section, i) => {
            var numberOfFalse = 0;
            section.items.forEach(item => {

                if (item.clicked === false) {
                    numberOfFalse += 1;
                }

                if (numberOfFalse === section.items.length) {
                    buttonActivate[i] = false;
                }

                if (item.clicked === true) {
                    buttonActivate[i] = true;
                }
            });
        });

        setButtonActivate([...buttonActivate]);
    }
    
    function newItems(itemClicked) {
        itemClicked.clicked = true;

        buttonChecked();
        setAllItem([...allItem]);
    }

    return (
        <div id= "interface">
            <Main 
                increment = {increment}
                decrement = {decrement}
                newItems = {newItems}
                allItem = {allItem}
            />

            <Footer button= {buttonActivate} />
        </div>
    );
}
