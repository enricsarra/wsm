import { LitElement, html, css } from 'lit-element';

class MenuOverlay extends LitElement {

    static get properties() {
        return {
            closed: { type: Boolean },
        };
    }

    constructor() {
        super();
        this.closed = true;
    }

    static get styles() {
        return css `
      :host {
        position: relative;
      }
      svg {
        width: var(--eit-icon-size, 24px);
        height: var(--eit-icon-size, 24px);
        display: inline-block;
      }
      .trigger {
        cursor: pointer;
      }
      section {
        box-shadow: 3px 3px 8px #eee;
        position: absolute;
        background-color: #cfd8dc;
        color: #868f90;
        text-align:left;
        width: 100%;   
      }

        button {
          background-color: #bdbdbd;
        }
        .closed {
          display: none;
        }

        ::slotted(p) {
          margin: 0.3em;
        }
    `;
    }

    render() {
        return html `
        
      ${ this.triggerTemplate }
      ${ this.contentTemplate }
      
    `;
    }

    get triggerTemplate() {
        return html `
      <div class="trigger" @click="${this.toggle}">
        <slot name="trigger"></slot>  
      </div>
    `;
    }

    get contentTemplate() {
        return html `
    
      <section class="${ this.closed ? 'closed' : '' }"   @click="${this.doClick}">
        <slot></slot>
        <button href="#" @click="${this.closeHandler}" >Cerrar</button>
      </section>
     
    `;
    }

    toggle() {
        this.closed = !this.closed;
        //console.log('closed esta a', this.closed);
    }

    closeHandler(e) {
        e.preventDefault();
        this.close();
    }

    close() {
        this.closed = true;
    }

    doClick(e) {
        //console.log('has hecho clic', e);
    }
}
customElements.define('wsm-menu-overlay', MenuOverlay);