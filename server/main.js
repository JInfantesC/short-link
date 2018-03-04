import { Meteor } from 'meteor/meteor';
import SimpleSchema from "simpl-schema";

Meteor.startup(() => {
    /*Simple schema demo
    const employeeSchema=new SimpleSchema({
        name: {
            type:String,
            min:1,
            max:200
        },
        hourlyWage: {
            type:Number,
            min:0,
            optional:true
        },
        email: {
            type:String,
            regEx:SimpleSchema.RegEx.Email,
            optional:true
        }
    });
    employeeSchema.validate({
        name:"aaaa",
        hourlyWage:11,
        email:"jose.infantes@a.c"
    });*/
});
