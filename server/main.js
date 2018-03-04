import { Meteor } from 'meteor/meteor';
import SimpleSchema from "simpl-schema";
import {Accounts} from "meteor/accounts-base";

Meteor.startup(() => {
    Accounts.validateNewUser((user)=>{
        const email=user.emails[0].address;
        try {
            new SimpleSchema({
                email:{
                    type:String,
                    regEx:SimpleSchema.RegEx.Email
                }
            }).validate({email})
        }catch(e){
            throw new Meteor.Error(400, e.message);
        }
        return true;
    });
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
        email:"hello@mail.com"
    });*/
});
