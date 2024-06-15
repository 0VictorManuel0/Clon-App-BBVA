import { LitElement, css, html } from "lit";
import UserComponent from "./parts-component/username-component";
import PassComponent from "./parts-component/password-component";
import ButtonComponent from "./parts-component/button-component";

export default class LoginComponent extends LitElement{
    
    listUsers=[
        {
            userName: 'pedro', 
            apelliP: 'pedro',
            apelliM: 'pe',
            passUser: 'pedro123'
        },
        {
            userName: 'edwin', 
            apelliP: 'edwinp',
            apelliM: 'edwinm',
            passUser: 'edwin123'
        },
        {
            userName: 'osu', 
            apelliP: 'osup',
            apelliM: 'osum',
            passUser: 'osu123'
        }
    ]

    constructor(){
        super();
    }

    connectedCallback(){
        super.connectedCallback();
    }

    static styles = css`
        .data{
            width:100%;
            height: 80%;
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content: space-evenly;
        }
        .inputs-cont{
            display:flex;
            flex-direction: column;
            height:30%;
            width:60%;
            .inputs{
                height: 100%;
                display:flex;
                flex-direction:column;
                justify-content: space-around;
            }
        }
    `;
    render(){
        return html
        `
            <div class="data">
                <h1>BBVA</h1>
                <div class="inputs-cont">
                    <div class="inputs">
                        <div>
                            <user-component></user-component>
                        </div> 
                        <div>
                            <pass-component></pass-component>
                        </div>
                    </div>
                </div>
                <btn-enter></btn-enter>
            </div>
        `;
    }

}

customElements.define('user-component', UserComponent);
customElements.define('pass-component', PassComponent);
customElements.define('btn-enter', ButtonComponent);