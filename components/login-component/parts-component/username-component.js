import { LitElement, html } from "lit";

export default class UserComponent extends LitElement{
    constructor(){
        super();
        
    }
    
    connectedCallback(){
        super.connectedCallback();
    }
    render(){
        return html
        `
            <input  placeholder="Nombre" id="inputUserName" autocomplete="off">    
        `;
    }

}