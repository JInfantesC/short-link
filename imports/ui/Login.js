import React from "react";
import {Link} from "react-router"; //No es default por eso las llaves

export default class Login extends React.Component{
    render(){
        return (
            <div>
                <h1>Login a Short-Link</h1>
                <p>Formulario de login</p>
                <Link to="/signup">¿Tienes una cuenta?</Link>
            </div>
        )
    }
}
