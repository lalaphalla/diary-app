/**
 * This component use in Entry List Component
 *
 * @export
 * @class EntryCard
 * @extends {HTMLElement}
 */
export class EntryCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        // Extract data attributes
        const date = this.dataset.date || '';
        const title = this.dataset.title || '';
        const desc = this.sanitizeHTML(this.dataset.desc || '');
        const key = this.dataset.key || '';
        const url = `/pages/entry-detail/index.html?key=${key}`;
        const isEntryDetail = this.getAttribute('is-entry-detail') === 'true';

        const check_desc = (!isEntryDetail) ? this.truncate(desc, 400) : desc
        this.innerHTML = `
            <div class="entry-head">
                <p>${new Date(date).toDateString()}</p>
                <div class="entry-buttons">
                <button class="btn-remove" popovertarget="remove-popover"><img src="/assets/images/trash-icon.svg" alt="remove"></button>
                <button class="btn-edit"><img src="/assets/images/edit.svg" alt="edit"></button>
                </div>
            </div>
            <div class="entry-content">
                <h4 class="entry-title">${title}</h4>
                <p class="${!isEntryDetail ? '' : 'entry-desc'}">${check_desc}</p>
            </div>

            
        `

        if (isEntryDetail) {
            this.classList.add('card')
        }

        // Attach event listeners
        // Edit and remove pass key to entry list to update storage
        this.querySelector('.btn-remove').addEventListener('click', (e) => this.removeEntry(e, key));
        this.querySelector('.btn-edit').addEventListener('click', (e) => this.handleEdit(e, key));
        this.addEventListener('click', () => this.handleEntryDetail(url, key, isEntryDetail))


    }
    /**
     * Truncate String
     *
     * @param {*} str text
     * @param {*} n
     * @return {*} 
     * @memberof EntryCard
     */
    truncate(str, n) {
        if (str.length <= n) { return str; }
        const subString = str.slice(0, n - 1); // the original check
        return subString + "&hellip;"
    };
    /**
     * Show Detail Entry 
     * Cover contain of the card
     * @param {string} [url='']
     * @param {number} [key=0]
     * @memberof EntryCard
     */
    handleEntryDetail(url = '', key = 0, isEntryDetail) {
        isEntryDetail ? location.href = `/pages/edit/index.html?key=${key}` : location.href = `/pages/entry-detail/index.html?key=${key}`
    }

    handleEdit(e, key) {
        // Stop Event View Entry to pop
        e.stopPropagation();
        location.href = `/pages/edit/index.html?key=${key}`
    }
    removeEntry(e) {
        // Stop Event View Entry to pop
        e.stopPropagation();
        const key = this.dataset.key
        // if onRemove exisit in entry list do onRemove method
        if (this.onRemove) {
            this.onRemove(key)
            // this.key = key
        } else {
            // For remove in detail entry page
            const btnYes = document.querySelector('.btn-yes')
            const btnNo = document.querySelector('.btn-no')
            const popover = document.querySelector('#remove-popover')
            popover.showModal();
            btnYes.addEventListener('click', () => {
                const entries = JSON.parse(localStorage.getItem('entries'))
                entries.splice(key, 1);
                localStorage.setItem('entries', JSON.stringify(entries));
                // Go to entry list page
                location.href = `/pages/all-entry/index.html`
            })
            btnNo.addEventListener('click', () => popover.close())
        }
    }

    //   preventing users from injecting HTML elements into the description
    sanitizeHTML(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }
}
customElements.define('entry-card', EntryCard)