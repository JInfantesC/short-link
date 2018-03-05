import {Meteor} from "meteor/meteor";
import React from "react";
import {Tracker} from "meteor/tracker";

import {Links} from "../api/links";

export default class LinksList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            links:[]
        }
    }
    componentDidMount(){
        //Se dispara justo cuando después de que el componente se dibuje.
        this.linksTracker=Tracker.autorun(() => {
            Meteor.subscribe("currentUserLinks");//Links tendrá el resultado de esta subscripción.
            let links = Links.find().fetch();
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
            return (<p key={link._id} >{link.url}</p>);
        });
    }
    render(){
        return (
        <div>
            <p>Links List</p>
            <div>{this.renderLinksListItems()}</div>
        </div>
    )};
}
