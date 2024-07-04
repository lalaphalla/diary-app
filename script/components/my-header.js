/**
 * MyHeader component
 *
 * @class MyHeader
 * @extends HTMLElement
 */
export class MyHeader extends HTMLElement {
    /**
     * Creates an instance of MyHeader.
     *
     * @memberof MyHeader
     */
    constructor() {
        super()
    }

    /**
     * Called when the custom element is first connected to the document.
     *
     * @memberof MyHeader
     */
    connectedCallback() {
        // Extract the text content of the element
        const child = this.textContent
        const isOverview = this.getAttribute('is-overview') === 'true'
        const img = (isOverview) ? '/assets/images/book-icon.svg' : '/assets/images/back-arrow-icon.svg'
        // Define the URL based on the usage
        const url = this.getAttribute('url')

        // Set the HTML content of the element
        this.innerHTML = `
            <h2>${child}</h2>
            ${(isOverview) ? `<a href="${url}"><img src="${img}" alt="header" /></a>` : `<div class="btn-back" onclick="history.back()"> <img src="${img}" alt="header" /> </div>`}
        `
        // Add the CSS classes to the element
        this.classList.add('block', 'my-header')
    }
}
// Register the custom element
customElements.define('my-header', MyHeader)
