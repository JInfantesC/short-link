import {Meteor} from "meteor/meteor";
import React from "react";
import PropTypes from "prop-types";

import {Links} from "../api/links";


export default class LinksListItem extends React.Component{
    render(){
        return (
        <div>
            <p>{this.props.url} <small>{this.props.shortUrl}</small></p>
        </div>
    )};
}

LinksListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired
}
