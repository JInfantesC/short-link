import {Meteor} from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory} from "react-router";

import Signup from "./../imports/ui/Signup";
import Link from "./../imports/ui/Link";
import NotFound from "./../imports/ui/NotFound";

/*componente que controla las direcciones URL.
Componente Route, path, declaramos la url. component, declaramos el componente que se renderiza.
path *, recoge el resto de rutas no declaradas.
*/
const routes=(
    <Router history={browserHistory}>
        <Route path="/signup" component={Signup}/>
        <Route path="/links" component={Link}/>
        <Route path="*" component={NotFound}/>
    </Router>
);

Meteor.startup(()=>{
    ReactDOM.render(routes, document.getElementById("app")); //Pasamos routes al metodo render. (Routes es un JSX).

})
