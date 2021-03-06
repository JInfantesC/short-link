import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import shortid from "shortid";

export const Links = new Mongo.Collection("links");

if(Meteor.isServer){
    Meteor.publish("currentUserLinks",function(){ //Publicamos, unicamente en el servidor.
            //No podemos usar Meteor.userId(). hay que usar una función anonima y llamar a this.userId
        return Links.find({userId:this.userId});    //Si suscribimos a currentUserLinks. EL valor de la collecion Links será el de este return.
    });
}
//estándar para nombrar métodos.
//resource.action
//emails.send
//links.insert
Meteor.methods({
    "links.insert"(url){
        if(!this.userId){
            throw new Meteor.Error("No autorizado","Usuario debe estar validado");
        }
        new SimpleSchema({
            url:{
                type: String,
                regEx:SimpleSchema.RegEx.Url,
                label:"Tu enlace"
            }
        }).validate({url});


        Links.insert({
            _id:shortid.generate(),
            url,
            userId:this.userId,
            visible:true
        });
    },
    "links.setVisibility"(id,visibility){
        if(!this.userId){
            throw new Meteor.Error("No autorizado","Usuario debe estar validado");
        }
        new SimpleSchema({
            id:{
                type: String,
                min:1
            },
            visibility:{
                type: Boolean,
            }
        }).validate({id,visibility});
        Links.update({
            _id: id,
            userId:this.userId
        }, {
            $set: {visible: visibility}
        });
    },
    "links.trackVisit"(id){
        new SimpleSchema({
            id:{
                type: String,
                min:1
            }
        }).validate({id});
        Links.update({
            _id: id
        }, {
            $set: {lastVisitedAt: new Date().getTime()},
            $inc: {visitedCount:1}
        });
    }
});
