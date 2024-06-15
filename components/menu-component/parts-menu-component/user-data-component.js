import { LitElement, css, html } from "lit";
import ClockComponent from "./clock-component";

export default class UserData extends LitElement{
    // nombre del usuario
    
    constructor(){
        super();
    }

    firstUpdated(){
        super.connectedCallback();
    }

    static styles=css`
        .info-user{
            width: 80%;
            height: 90%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .name-user, .num-cuenta{
                border: 1px solid black;
                border-radius: 10px;
            }
        }
    `;

    
    render(){
        return html`
            <div class="info-user">
                <show-clock></show-clock>
                <div class="name-user">
                    <span id="full-name"></span>
                </div>
                <div class="num-cuenta">
                    <span>${this.numeroRandom()}</span>
                </div>
            </div>
        `;
    }

    numeroRandom(_e){
        let numeroRandom = Math.floor(Math.random()*(100000000000,1000000000000000));
        return numeroRandom;
    }
}

customElements.define('show-clock', ClockComponent);