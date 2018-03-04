import React from "react";
import {Link} from "react-router";
import {Accounts} from "meteor/accounts-base"

export default class Signup extends React.Component{
    constructor(props){
        super(props);//Estamos sobrecargando el constructor. Por eso ejecutamos super. Solo podemos usar super en el constructor
        this.state={
            error:""
        }
    }
    onSubmit(e){
        e.preventDefault();
        let email=this.refs.email.value.trim();
        let password=this.refs.password.value.trim();
        Accounts.createUser({email, password},(err)=>{
            if (err){
                this.setState({error:err.reason});
            }else{
                this.setState({error:""});
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Registro en Short-Link</h1>
                {this.state.error?<p>{this.state.error}</p>:undefined}
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" ref="email" name="email" placeholder="e-mail"/>
                    <input type="password" ref="password" name="password" placeholder="Contraseña"/>
                    <button>Crear cuenta</button>
                </form>
                <Link to="/">Volver a login</Link>
            </div>
        )
    }
}
