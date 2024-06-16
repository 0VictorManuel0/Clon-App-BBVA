import { LitElement, css, html } from "lit";

export default class BankData extends LitElement{
    constructor(){
        super();
    }

    static styles=css`
        .data-bank-card{
            width: 80%;
            height: 60%;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
        }
        .item-data{
            display: flex;
            justify-content: space-between;
        }
    `;
    render(){
        return html 
        `
            <div class="data-bank-card">
                <div class="item-data">
                    <span>Cuenta Nomina</span>
                    <span>$21 000</span>
                </div>
                <div class="item-data">
                    <span>Cuenta TDC </span>
                    <span>$15 000</span>
                </div>
            </div>
        `;
    }

}
customElements.define('bank-data', BankData);