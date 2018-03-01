import React from "react";
import {browserHistory} from "react-router";

export default class Link extends React.Component{
    onLogout(){
        browserHistory.push("/")
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
