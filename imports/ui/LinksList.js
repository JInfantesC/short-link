import {Meteor} from "meteor/meteor";
import { ReactiveVar } from 'meteor/reactive-var'
import React from "react";
import {Tracker} from "meteor/tracker";


import {Links} from "../api/links";

import LinksListItem from "./LinksListItem"

export default class LinksList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            links:[],
            mostrarOcultos:new ReactiveVar( false )
        }
    }
    componentDidMount(){
        //Se dispara justo cuando después de que el componente se dibuje.
        this.linksTracker=Tracker.autorun(() => {
            Meteor.subscribe("currentUserLinks");//Links tendrá el resultado de esta subscripción.
            let links = Links.find({visible:!this.state.mostrarOcultos.get()}).fetch();
            this.setState({
                links
            });
        });
    }
    componentWillUnmount(){
        //Se dispará justo antes de que se elimine el componente.
        this.linksTracker.stop();
    }
    renderLinksListItems(){
        return this.state.links.map((link) => {
            const shortUrl=Meteor.absoluteUrl(link._id);
            return (<LinksListItem key={link._id} {...link} shortUrl={shortUrl}/>);
        });
    }
    cambiarVisibilidad(){
        this.state.mostrarOcultos.set(this.refs.ocultos.checked)
    }
    render(){
        return (
        <div>
            <div>
                <label>Ver enlaces ocultos:
                    <input type="checkbox" ref="ocultos" onClick={this.cambiarVisibilidad.bind(this)}/>
                </label>
            </div>
            <p>Links List</p>
            <div>{this.renderLinksListItems()}</div>
        </div>
    )};
}
