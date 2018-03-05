import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";

export const Links = new Mongo.Collection("links");

if(Meteor.isServer){
    Meteor.publish("currentUserLinks",()=>{ //Publicamos, unicamente en el servidor.
        return Links.find();    //Si suscribimos a currentUserLinks. EL valor de Links será el de este return.
    });
}
