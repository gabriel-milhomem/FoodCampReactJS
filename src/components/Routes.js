import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import Review from "./Review";
import App from "./App";
import getDataSet from "./Data";
import Header from "./Header";

export default function Routes() {
    var [allItem, setAllItem] = React.useState(getDataSet());
    var [buttonActivate, setButtonActivate] = React.useState([false, false, false]);

    return (
        <>
            <Header />

            <BrowserRouter>
                <Switch>
                    <Route path= "/review">
                        <Review 
                            allItem= {allItem}
                            setAllItem= {setAllItem}
                            setButtonActivate= {setButtonActivate}
                        />
                    </Route>

                    <Route path= "/">
                        <App
                            allItem= {allItem}
                            setAllItem= {setAllItem}
                            buttonActivate= {buttonActivate} 
                            setButtonActivate= {setButtonActivate}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}
