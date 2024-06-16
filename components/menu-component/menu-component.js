import { LitElement, css, html } from "lit";
import "./parts-menu-component/user-data-component";
import "./parts-menu-component/welcome-component";
import "./parts-menu-component/bank-data";
import "./parts-menu-component/card-data-component";
import "./parts-menu-component/movimientos-component";

export default class MenuComponent extends LitElement{

    constructor(){
        super();
    }

    static styles = css`
        .container-welcome{
            align-items:center;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 97vh;

            .items-welcome{
                display: flex;
                flex-direction: column;
                width: 90%;
                height: 97vh;
            }
        }
        .wel-com{
            height:10%;
            display:flex;
            justify-content:center;
        }
        .user-data{
            align-items:center;
            height:20%;
            display:flex;
            justify-content:center;
        }
        .bank-data{
            align-items:center;
            height:20%;
            display:flex;
            justify-content:center;
        }
        .card-data{
            align-items:center;
            height:20%;
            display:flex;
            justify-content:center;
        }
        .mov-card{
            align-items:center;
            height:30%;
            display:flex;
            justify-content:center;
        }
        .btn-close{
            float:right;
            margin-top: 1.5em;
        }
    `;

    render(){
        return html
        `
            <div class="container-welcome">
                <div class="items-welcome">
                    <div>
                        <button @click="${this.cerrarSesion}" class="btn-close">X</button>
                    </div>
                    <welcome-component class="wel-com"></welcome-component>
                    <user-data class="user-data"></user-data>
                    <bank-data class="bank-data"></bank-data>
                    <card-bank class="card-data"></card-bank>
                    <movimientos-component class="mov-card"></movimientos-component>
                </div>
            </div>
        `
    }

    cerrarSesion(_ev){
        const pageLogin = document.querySelector('main-component').shadowRoot.getElementById('pageLogin');
        const pageMenu = document.querySelector('main-component').shadowRoot.getElementById('pageMenu');
        
        pageMenu.classList.remove('mostrar');
        pageLogin.classList.add('mostrar');

        document.querySelector('main-component').shadowRoot.querySelector('login-component').shadowRoot.querySelector('user-component').shadowRoot.getElementById('inputUserName').value='';
        document.querySelector('main-component').shadowRoot.querySelector('login-component').shadowRoot.querySelector('pass-component').shadowRoot.getElementById('inputUserPass').value='';
    }
}

customElements.define('menu-component', MenuComponent);