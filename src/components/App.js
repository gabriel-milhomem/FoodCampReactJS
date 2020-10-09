import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SendOrder from "./SendOrder";
import getDataSet from "./Data";

export default function App() {
    var [allItem, setAllItem] = React.useState(getDataSet());
    var [buttonActivate, setButtonActivate] = React.useState([false, false, false]);
    
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
        console.log(itemClicked.quantity);
    }

    function buttonChecked() {
        allItem.forEach((section, i) => {
            var numberOfFalse = 0;
            section.items.forEach(item => {

                if(item.clicked === false) {
                    numberOfFalse += 1;
                }

                if(numberOfFalse === section.items.length) {
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
        <div class= {buttonActivate.indexOf(false) === -1 ? "interfaceSendOrder" : "interface"}>
            <Header />
            <Main 
                increment = {increment}
                decrement = {decrement}
                newItems = {newItems}
                allItem = {allItem}
            />
            <Footer button= {buttonActivate} />
            <SendOrder allItem= {allItem} />
        </div>
    );
}