import {Meteor} from "meteor/meteor";
import React from "react";

export default class AddLink extends React.Component{
    onSubmit(e){
        const url=this.refs.url.value.trim();
        e.preventDefault();
        if (url){
            Meteor.call("links.insert", url);
            this.refs.url.value="";
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="URL"/>
                    <button>Añadir enlace</button>
                </form>
            </div>
        )
    }
}
