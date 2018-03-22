import React from "react";
import PropTypes from "prop-types";
export default class Checkbox extends React.Component{
    _onClick(){
        this.props.onClick(this.refs.checkbox.checked);
    }
    render(){
        return (
        <div>
            <div>
                <label>{this.props.label}
                    <input type="checkbox" ref="checkbox" onClick={this._onClick.bind(this)} defaultChecked={this.props.isChecked}/>
                </label>
            </div>
        </div>
    )};
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isChecked: PropTypes.bool
}
Checkbox.defaultProps = {
    isChecked:false
}
