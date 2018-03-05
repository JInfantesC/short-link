import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";

export const Links = new Mongo.Collection("links");

if(Meteor.isServer){
    Meteor.publish("currentUserLinks",function(){ //Publicamos, unicamente en el servidor.
            //No podemos usar Meteor.userId(). hay que usar una función anonima y llamar a this.userId
        return Links.find({user:this.userId});    //Si suscribimos a currentUserLinks. EL valor de la collecion Links será el de este return.
    });
}
