import {Meteor} from "meteor/meteor";
import React from "react";
import PropTypes from "prop-types";

import {Links} from "../api/links";

import Clipboard from "clipboard";


export default class LinksListItem extends React.Component{
    constructor(props){
        super(props);//Estamos sobrecargando el constructor. Por eso ejecutamos super. Solo podemos usar super en el constructor
        this.state={
            copied:false
        }
    }
    componentDidMount(){
        this.clipboard=new Clipboard(this.refs.copy);
        this.clipboard.on("success",()=>{
            this.setState({"copied":true})
            setInterval(()=>this.setState({"copied":false}),1000);
        }).on("error",()=>{

        });
    }
    componentWillUnmount(){
        this.clipboard.destroy();
    }
    render(){
        return (
        <div>
            <p>{this.props.url} <small>{this.props.shortUrl}</small></p>
            <button ref="copy" data-clipboard-text={this.props.shortUrl}>
                {(this.state.copied?"Copiado":"Copiar")}
            </button>
        </div>
    )};
}

LinksListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired
}
