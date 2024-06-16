import { LitElement, html } from "lit";

export default class PassComponent extends LitElement{
    constructor(){
        super();
    }

    render(){
        return html
        `
            <input required type="password" id="inputUserPass" placeholder="Contraseña">
        `;
    }
}
customElements.define('pass-component', PassComponent);
