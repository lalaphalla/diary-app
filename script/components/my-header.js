export class MyHeader extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const child = this.textContent
        // const img = this.getAttribute('img')
        const isOverview = this.getAttribute('is-overview') === 'true'

        const img = (isOverview) ? '/assets/images/book-icon.svg' : '/assets/images/back-arrow-icon.svg'
        const url = (isOverview) ? this.getAttribute('url') : document.referrer

        this.innerHTML = `
            <h2>${child}</h2>
            ${(isOverview) ? `<a href="${url}"><img src="${img}" alt="header" /></a>` : `<div class="btn-back" onclick="history.back()"> <img src="${img}" alt="header" /> </div>`}
        `
        this.classList.add('block','my-header')
    }
}
customElements.define('my-header', MyHeader)