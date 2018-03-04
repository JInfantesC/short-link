import {Meteor} from "meteor/meteor";
import ReactDOM from "react-dom";
import {Tracker} from "meteor/tracker";

import {routes, onAuthChange} from "../imports/routes/routes";

Tracker.autorun(()=>{
    const isLoggedIn=!!Meteor.userId();//Doble exclamación, transforma los valores falsy(undefined, null, 0) trusty ("cadena", 1) a False o True.
    onAuthChange(isLoggedIn);
});

Meteor.startup(()=>{
    ReactDOM.render(routes, document.getElementById("app")); //Pasamos routes al metodo render. (Routes es un JSX).
})
