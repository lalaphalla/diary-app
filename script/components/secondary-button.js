/*
 * SecondaryButton component
 * 
 * This component renders a button with a secondary color scheme.
 * It accepts text content and adds the class "block" to its parent element.
 */
export class SecondaryButton extends HTMLElement {

    constructor() {
        super()
    };

    connectedCallback() {
        // Get the text content of the element and add it to the button
        const child = this.textContent
        const cardHTML = `
            <button class="secondary-button">
                ${child}
            </button>
        `;
        this.innerHTML = cardHTML;
        // Add the "block" class to the parent element
        this.parentElement.classList.add("block")
    }
}

// Define the custom element
customElements.define('secondary-button', SecondaryButton);
