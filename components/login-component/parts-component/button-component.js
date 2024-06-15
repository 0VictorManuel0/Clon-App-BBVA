import { LitElement, html } from "lit";

export default class ButtonComponent extends LitElement{
    nombreCompleto='';
    banderaModal=false;
    constructor(){
        super();
    }
    connectedCallback(){
        super.connectedCallback();
    }
    render(){
        return html
        `
            <button id="btn-login" @click="${this.guardarDatos}" >Entrar</button>
        `;
    }

    guardarDatos(_e){
        let userName = document.querySelector('main-component').shadowRoot.querySelector('login-component').shadowRoot.querySelector('user-component').shadowRoot.getElementById('inputUserName').value;
        let passUser = document.querySelector('main-component').shadowRoot.querySelector('login-component').shadowRoot.querySelector('pass-component').shadowRoot.getElementById('inputUserPass').value;
        this.banderaModal=false;
        const listUsers = document.querySelector('main-component').shadowRoot.querySelector('login-component').listUsers;
        const pageLogin = document.querySelector('main-component').shadowRoot.getElementById('pageLogin');
        const pageMenu = document.querySelector('main-component').shadowRoot.getElementById('pageMenu');

        listUsers.forEach(element => {
            
            if (element.userName===userName && element.passUser===passUser) {

                this.nombreCompleto=`${element.userName} ${element.apelliP} ${element.apelliM}`;
                document.querySelector('main-component').shadowRoot.querySelector('menu-component').shadowRoot.querySelector('user-data').shadowRoot.getElementById('full-name').textContent = this.nombreCompleto;

                pageLogin.classList.remove('mostrar');
                pageMenu.classList.add('mostrar');
                
                this.banderaModal=!this.banderaModal;
            }
        });
        this.mostrarModal();
    }

    mostrarModal(){
        const pageLogin = document.querySelector('main-component').shadowRoot.getElementById('pageLogin');
        const pageError = document.querySelector('main-component').shadowRoot.getElementById('pageError');
            if (!this.banderaModal) {
                pageLogin.classList.remove('mostrar');
                pageError.classList.add('mostrar');
            }
    }
}