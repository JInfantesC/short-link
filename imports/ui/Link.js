import {Meteor} from "meteor/meteor";
import React from "react";
import {Accounts} from "meteor/accounts-base";
import {Links} from "../api/links";
import LinksList from "./LinksList";

export default class Link extends React.Component{
    onLogout(){
        Accounts.logout();
    }
    onSubmit(e){
        const url=this.refs.url.value.trim();
        e.preventDefault();

        if (url){
            Meteor.call("links.insert", url);
            //Links.insert({url, user:Meteor.userId()});
            this.refs.url.value="";
        }
    }
    render(){
        return (
            <div>
                <h1>Componente Link</h1>
                <p>Contenido del componente Link</p>
                <button onClick={this.onLogout.bind(this)}>Cerrar sesión</button>
                <LinksList />
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="URL"/>
                    <button>Add Link</button>
                </form>
            </div>
        )
    }

}
