// PrimaryButton component
//
// This component renders a button with a primary color scheme.
// It accepts text content and adds the class "block" to its parent element.
export class PrimaryButton extends HTMLElement {

    // constructor
    constructor() {
        super()
    };

    // connectedCallback
    // Setup the component's HTML content and add the "block" class to its parent element
    connectedCallback() {
        // Get the text content of the element and add it to the button
        const child = this.textContent
        const cardHTML = `
            <button class="primary-button"
            >
                ${child}
            </button>
            `;
        this.innerHTML = cardHTML;
        // Add the "block" class to the parent element
        this.classList.add("block")
    }
}

// Register the component with the browser
customElements.define('primary-button', PrimaryButton);
