import { LitElement, css, html } from "lit";

export default class WelcomeComponent extends LitElement{
    constructor(){
        super();
    }

    connectedCallback(){
        super.connectedCallback();
    }

    static styles= css`
        .info{
            width: 90%;
            height: 100%;
            text-align: center;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content: space-around;

        }
    `;

    render(){
        return html`
            <div class="info">
                <span>Bienvenido user</span>
                <span>buenos dias/tardes/noches</span>
            </div>
        `;
    }
}