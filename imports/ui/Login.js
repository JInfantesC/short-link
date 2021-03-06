import React from "react";
import {Link} from "react-router"; //No es default por eso las llaves
import {Meteor} from "meteor/meteor";

export default class Login extends React.Component{
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

        Meteor.loginWithPassword({email},password,(err)=>{
            if (err){
                this.setState({error:"Credenciales incorrectas. Revise email y contraseña"});
            }else{
                this.setState({error:""});
            }
        });
    }
    render(){
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>Login en Short-Link</h1>
                    {this.state.error?<p>{this.state.error}</p>:undefined}
                    <form onSubmit={this.onSubmit.bind(this)} noValidate>
                        <input type="email" ref="email" name="email" placeholder="e-mail"/>
                        <input type="password" ref="password" name="password" placeholder="Contraseña"/>
                        <button>Login</button>
                    </form>
                    <Link to="/signup">¿Tienes una cuenta?</Link>
                </div>
            </div>)
    }
}
