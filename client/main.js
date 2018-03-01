import {Meteor} from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";

import Signup from "./../imports/ui/signup";


Meteor.startup(()=>{
    ReactDOM.render(<Signup/>, document.getElementById("app"))
})
