import { LitElement, css, html } from "lit";

export default class DataMovements extends LitElement{
    constructor(){
        super();
    }

    connectedCallback(){
        super.connectedCallback();
    }

    static styles = css
    `
        .move-cont{
            display:flex;
            height: 97vh;
            justify-content: center;
            width: 100%;
        }
        .data-move{
            align-items: center;
            display: flex;
            flex-direction:column;
            height: 95vh;
            justify-content: space-around;
            text-align: center;
            width: 90%;
            .btn-back{
                width: 40%;
            }
        }
    `;

    render(){
        return html
        `
            <div class="move-cont">
                <div class="data-move">
                <h1>Movimiento n°</h1>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur, adipisicing elit. 
                        Explicabo ipsa quo eum? Totam 
                        reprehenderit numquam natus amet. 
                    </p>

                    <span>$1599.00</span>
                    <button @click="${this.btnRegresar}" class="btn-back">Regresar</button>
                </div>
            </div>
        `;
    }


    btnRegresar(_e){
        const pageMovimiento =document.querySelector('main-component').shadowRoot.getElementById('pageMove');
        const pageMenu = document.querySelector('main-component').shadowRoot.getElementById('pageMenu');

        pageMovimiento.classList.remove('mostrar');
        pageMenu.classList.add('mostrar');
    }
}