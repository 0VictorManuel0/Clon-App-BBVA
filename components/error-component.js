import { LitElement, css, html } from "lit";

export default class ErrorComponent extends LitElement{
    constructor(){
        super();
    }

    connectedCallback(){
        super.connectedCallback();
    }

    static styles=css
    `
        .content{
            border: 1px solid black;
            background-color:#028484;
            width: 60%;
            height: 60%;
            margin-left: 15%;
        }
        .item-content{
            display: flex;
            flex-direction: column;
            width: 80%;
            height: 100%;
            justify-content: center;
            align-items: center;
        }
        .item{
            width: 70%;
            margin-left: 20%;
            margin-top: 20%;
            height: 100%;
        }
    `;

    render(){
        return html
        `
            <div class="content">
                <div class="item-content"> 
                    <div class="item">
                        <div>
                            <span>El usuario y/o contraseña son incorrectas</span>
                        </div><br>
                        <div>
                            <button @click="${this.btnRegresar}" >Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    btnRegresar(_e){
        const pageError =document.querySelector('main-component').shadowRoot.getElementById('pageError');
        const pageLogin = document.querySelector('main-component').shadowRoot.getElementById('pageLogin');

        
        pageError.classList.remove('mostrar');
        pageLogin.classList.add('mostrar');

        document.querySelector('main-component').shadowRoot.querySelector('login-component').shadowRoot.querySelector('user-component').shadowRoot.getElementById('inputUserName').value='';
        document.querySelector('main-component').shadowRoot.querySelector('login-component').shadowRoot.querySelector('pass-component').shadowRoot.getElementById('inputUserPass').value='';

    }
}