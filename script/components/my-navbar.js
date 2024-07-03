/**
 * MyNavbar component
 *
 * @export
 * @class MyNavbar
 * @extends {HTMLElement}
 */
export class MyNavbar extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = `
        <div class="nav-logo">
            <a href="/index.html"><img src="/assets/images/logo.png" alt="logo" /></a>
            <h1>Diary</h1>
        </div>
        <div class="nav-buttons">
            <a href="/pages/create/index.html"><img src="/assets/images/plus-icon.svg" alt="plus"></a>
            <a href="/pages/all-entry/index.html"><img src="/assets/images/library-books-icon.svg" alt="story-book"></a>
        </div>
        `
        this.classList.add('nav')
    }
}
customElements.define('my-navbar', MyNavbar)