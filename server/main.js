import { Meteor } from 'meteor/meteor';
import {WebApp} from "meteor/webapp";

import "../imports/api/users";  //No exportamos nada. Solamente se va a ejecutar la página.
import {Links} from "../imports/api/links";

import "../imports/startup/simple-schema-configuration";

Meteor.startup(() => {
    WebApp.connectHandlers.use((request, response, next)=>{//Middleware function
        const _id=request.url.slice(1);
        const link=Links.findOne({_id});//Selecciona un único elemento y devuelve el objeto.
        if (link){
            response.statusCode=302;    //Modifica el código del estado de la página
            response.setHeader("Location",link.url);//Cambia donde está la aplicación.
            response.end(); //Finaliza la respuesta
            Meteor.call("links.trackVisit", _id);
        }else{
            next();//Permite al servidor continuar
        }
    });
});
