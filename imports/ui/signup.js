import React from "react";
import {Link} from "react-router";

export default class Signup extends React.Component{
    constructor(props){
        super(props);//Estamos sobrecargando el constructor. Por eso ejecutamos super. Solo podemos usar super en el constructor
        this.state={
            error:""
        }
    }
    onSubmit(e){
        e.preventDefault();
        this.setState({error:"Algo ocurrió"})
    }
    render(){
        return (
            <div>
                <h1>Registro en Short-Link</h1>
                {this.state.error?<p>{this.state.error}</p>:undefined}
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" name="email" placeholder="e-mail"/>
                    <input type="password" name="password" placeholder="Contraseña"/>
                    <button>Crear cuenta</button>
                </form>
                <Link to="/">Volver a login</Link>
            </div>
        )
    }
}
