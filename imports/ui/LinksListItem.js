import {Meteor} from "meteor/meteor";
import React from "react";
import PropTypes from "prop-types";

import {Links} from "../api/links";

import Clipboard from "clipboard";

import moment from "moment";


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
    renderStats(){
        if(this.props.visitedCount){
            var lastVisited=moment(this.props.lastVisitedAt).fromNow();
            return <p>{this.props.visitedCount} - {lastVisited}</p>
        }else{
            return <p>Sin visitar</p>
        }

    }
    render(){
        return (
        <div>
            <p>{this.props.url} 
                <small>
                    <a href={this.props.shortUrl} target="_blank" >{this.props.shortUrl}</a>
                </small>
            </p>
            {this.renderStats()}
            <button ref="copy" data-clipboard-text={this.props.shortUrl}>
                {(this.state.copied?"Copiado":"Copiar")}
            </button>
            <button ref="visibility" onClick={()=>{
                Meteor.call("links.setVisibility",this.props._id, !this.props.visible);
            }}>
                {this.props.visible?"Ocultar":"Mostrar"}
            </button>
        </div>
    )};
}

LinksListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired,
    visible:PropTypes.bool.isRequired,
    visitedCount:PropTypes.number.isRequired,
    lastVisitedAt:PropTypes.number.isRequired,
}
