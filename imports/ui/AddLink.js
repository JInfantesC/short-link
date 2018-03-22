import {Meteor} from "meteor/meteor";
import React from "react";

export default class AddLink extends React.Component{
    constructor(props){
        super(props);
        this.state={
            url:""
        };
    }
    onSubmit(e){
        const {url}= this.state;//El valor url de this.state a la constante url.
        e.preventDefault();
        if (url){
            Meteor.call("links.insert", url,( err, res)=>{
                if(!err){
                    this.setState({url:""});
                }
            });

        }
    }
    onChange(e){
        this.setState({
            url:e.target.value.trim()
        });
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="URL"
                        value={this.state.url}
                        onChange={this.onChange.bind(this)}/>
                    <button>Añadir enlace</button>
                </form>
            </div>
        )
    }
}
