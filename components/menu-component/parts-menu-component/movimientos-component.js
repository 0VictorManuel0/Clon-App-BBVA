import { LitElement, css, html } from "lit";

export default class MovimientosComponent extends LitElement{
    constructor(){
        super();
    }

    connectedCallback(){
        super.connectedCallback();
    }

    static styles=css
    `
        .container-mov{
            display: flex;
            flex-direction: column;
            height: 80%;
            justify-content: space-around;
            width: 60%;

            span{
                
            }
        }
    `;

    render(){
        return html
        `
            <div class="container-mov">
                <button @click="${this.mostrarMovimiento}">Movimiento 1</button>
                <button @click="${this.mostrarMovimiento}">Movimiento 2</button>
                <button @click="${this.mostrarMovimiento}">Movimiento 3</button>
            </div>
        `;
    }


    mostrarMovimiento(_e){
        const pageMovimiento =document.querySelector('main-component').shadowRoot.getElementById('pageMove');
        const pageMenu = document.querySelector('main-component').shadowRoot.getElementById('pageMenu');

        pageMenu.classList.remove('mostrar');
        pageMovimiento.classList.add('mostrar');
    }
}