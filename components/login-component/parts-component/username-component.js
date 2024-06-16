import { LitElement, html } from "lit";

export default class UserComponent extends LitElement{
    constructor(){
        super();
        
    }
    
    render(){
        return html
        `
            <input  placeholder="Nombre" id="inputUserName" autocomplete="off">    
        `;
    }

}
customElements.define('user-component', UserComponent);
