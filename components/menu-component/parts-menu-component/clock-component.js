import { LitElement, css, html } from "lit";

export default class ClockComponent extends LitElement{
    constructor(){
        super();
    }


    static styles = css
    `
        :host{
            display: block;
        }
    `;

    
    firstUpdated(){
        setInterval(()=>this.requestUpdate(), 60000);
    }

    render(){
        return html`
            <div class="clock">${this.getClock()}</div>
        `;
    }

    getClock(){
        let date = new Date();
            return `${date.getHours().toString().padStart(2,0)}:${date.getMinutes().toString().padStart(2,0)}`;
    }
}