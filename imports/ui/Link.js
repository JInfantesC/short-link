import React from "react";
import {Accounts} from "meteor/accounts-base";

export default class Link extends React.Component{
    onLogout(){
        Accounts.logout();
    }
    render(){
        return (
            <div>
                <h1>Componente Link</h1>
                <p>Contenido del componente Link</p>
                <button onClick={this.onLogout.bind(this)}>Cerrar sesión</button>
            </div>
        )
    }

}
