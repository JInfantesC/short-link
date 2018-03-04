import {Meteor} from "meteor/meteor";
import React from "react";
import {Router, Route, browserHistory} from "react-router";

import Signup from "./../ui/Signup";
import Link from "./../ui/Link";
import NotFound from "./../ui/NotFound";
import Login from "./../ui/Login";


const onEnterPublicPage=()=>{//On enter comprobará si estamos logeados. SI es así redirigimosa links.
    if (Meteor.userId()){
        browserHistory.replace("/links");
    }
}
const onEnterPrivatePage=()=>{
    if (!Meteor.userId()){
        browserHistory.replace("/");
    }
}
const unauthenticatedPages=["/", "/signup"]; //Lista de paginas en las que debes estar sin login.
const authenticatedPages=["/links"];    //Lista de paginas en las que debes estar logeado.
/*componente que controla las direcciones URL.
Componente Route, path, declaramos la url. component, declaramos el componente que se renderiza.
path *, recoge el resto de rutas no declaradas.
*/
export const routes=(
    <Router history={browserHistory}>
        <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
        <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
        <Route path="/links" component={Link}  onEnter={onEnterPrivatePage}/>
        <Route path="*" component={NotFound}  onEnter={onEnterPrivatePage}/>
    </Router>
);
export const onAuthChange=(isLoggedIn)=>{
    const pathname=browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage=unauthenticatedPages.includes(pathname);    //Existe en array?
    const isAuthenticatedPage=authenticatedPages.includes(pathname);

    if (isUnauthenticatedPage&&isLoggedIn){//Si estas en una de estas páginas, y tienes login. Redirigir a /links.
        browserHistory.replace("/links");
    }else if (isAuthenticatedPage&&!isLoggedIn){//Si estas en una de estas páginas, y tienes no login. Redirigir a /.
        browserHistory.replace("/");
    }
    //Si no estás en ninguna de esas páginas, te quedas donde estás que puede ser una página que da igual tu estado de login o una que no existe.
    console.log("isLoggedIn",isLoggedIn);
}
