import { createRoot } from 'react-dom/client';
import React from 'react';
import App from "../App.tsx";

class ScreenComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 530px;
                    height: 320px;
                }
            </style>
            <div id="react-root"></div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const reactRoot = createRoot(this.shadowRoot.getElementById('react-root'));
        reactRoot.render(<MyReactComponent />);
    }

    disconnectedCallback() {
        const reactRoot = createRoot(this.shadowRoot.getElementById('react-root'));
        reactRoot.unmount();
    }
}

customElements.define('screen-component', ScreenComponent);

const MyReactComponent = () => {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};
