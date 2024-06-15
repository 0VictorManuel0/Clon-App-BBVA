import { LitElement, html } from "lit";

export default class PassComponent extends LitElement{
    constructor(){
        super();
    }

    connectedCallback(){
        super.connectedCallback();
    }
    render(){
        return html
        `
            <input required type="password" id="inputUserPass" placeholder="Contraseña">
        `;
    }
}