import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";

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
        Links.insert({
            url,
            userId:this.userId
        });
    }
});
