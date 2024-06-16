import { LitElement, css, html } from "lit";
import "./login-component/login-component";
import "./menu-component/menu-component";
import "./movements-component/data-movement";
import "./error-component";

export default class MainComponent extends LitElement{
    constructor(){
        super();
    }

    static styles = css`
        :host{
            align-items: center;
            display: flex;
            font-family: sans-serif;
            text-align:center;
            width: 100%;
            height: 97vh;
            color:white;
            background-image: url('./assets/imgs/bbva.jpg');
            background-size: cover;
        }
        .page-login{
            display: none;
            width:80%;
            height:80%;
            margin-left:10%;
        }
        .page-menu{
            display:none;
            width:80%;
            margin-left:10%;
        }
        .page-movements{
            display:none;
            width:80%;
            margin-left:10%;
        }
        .page-error{
            display: none;
            width: 40%;
            height: 40%;
            align-content: center;
            margin-left: 30%;
        }
        .mostrar{
            display:block;
        }
    `;

    render(){
        return html 
        `
            <div id="pageLogin" class="page-login mostrar">
                <login-component></login-component>
            </div>
            <div id="pageMenu" class="page-menu">
                <menu-component></menu-component>
            </div>
            <div id="pageMove" class="page-movements">
                <movements-data></movements-data>
            </div>
            <div id="pageError" class="page-error">
                <error-component></error-component>
            </div>
        `;
    }
}