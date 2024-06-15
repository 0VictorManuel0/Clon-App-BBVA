import { LitElement, css, html } from "lit";

export default class CardComponent extends LitElement{
    constructor(){
        super();
    }

    connectedCallback(){
        super.connectedCallback();
    }

    static styles= css
    `
        .container-card{
            width: 20em;
            height: 10em;
            display: flex;
            justify-content: center;
            align-items: end;
            background-image: url('../assets/imgs/tdc-visa.png');
            background-size: cover;
            background-repeat:no-repeat;
            background-position: center;
        }
        .card{
            display: flex;
            color: white;
            width: 60%;
            height: 20%;
            margin-bottom:5%;
        }
    `

    render(){
        return html 
        `
            <div class="container-card">
                <div class="card">
                    <span>${this.numeroRandom()}</span>
                </div>
            </div>
        `
    }
    numeroRandom(_e){
        let numeroRandom = Math.floor(Math.random()*(100000000000,1000000000000000));
        return numeroRandom;
    }
}