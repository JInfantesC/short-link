import React from "react";
import {Link} from "react-router";

export default class Signup extends React.Component{
    render(){
        return (
            <div>
                <h1>Registro en Short-Link</h1>
                <p>Formulario de registro</p>
                <Link to="/">Volver a login</Link>
            </div>
        )
    }
}
