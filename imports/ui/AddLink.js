import {Meteor} from "meteor/meteor";
import React from "react";
import Modal from "react-modal";

export default class AddLink extends React.Component{
    constructor(props){
        super(props);
        this.state={
            url:"",
            modalAbierto:false
        };
    }
    onSubmit(e){
        const {url}= this.state;//El valor url de this.state a la constante url.
        e.preventDefault();
        if (url){
            Meteor.call("links.insert", url,( err, res)=>{
                if(!err){
                    this.cerrarModal().bind(this)
                }
            });

        }
    }
    onChange(e){
        this.setState({
            url:e.target.value.trim()
        });
    }
    abrirModal(){
        this.setState({"modalAbierto":true})
    }
    cerrarModal(){
        this.setState({"modalAbierto":false,"url":""})
    }
    render(){
        return (
            <div>
                <Modal
                    contentLabel="Añadir enlace"
                    isOpen={this.state.modalAbierto}>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input type="text" ref="url" placeholder="URL"
                            value={this.state.url}
                            onChange={this.onChange.bind(this)}/>
                        <button>Añadir enlace</button>
                    </form>
                    <button onClick={this.cerrarModal.bind(this)}>Cancelar</button>
                </Modal>
                <button onClick={this.abrirModal.bind(this)}>Añadir enlace</button>
            </div>
        )
    }
}
