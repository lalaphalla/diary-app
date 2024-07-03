/**
 * A custom element representing a list of entries.
 * @extends HTMLElement
 */
export class EntryList extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        // Clear existing content   
        this.innerHTML = ''
        const isAllEntry = this.dataset.isall === 'true' //boolean is all true
        // slice(0, 3) for home 
        const allEntry = this.loadEntries()

        //  If there is no entry display a message
        if (allEntry.length === 0) {
            this.innerHTML = `
                <h2>Start your new Diary!</h2>
                <img src="/assets/images/start-diary.png" al="new diary" />
            `
        } else {

            // Add class entry-list-all to give grow 1 to the page view all entry
            if (isAllEntry) this.classList.add('entry-list-all')

            const popover = document.createElement('dialog');
            popover.setAttribute('id', 'remove-popover');
            // popover.setAttribute('popover', 'manual');
            popover.innerHTML = `
                <div class="remove-popover">
                    <img width="100px" src="/assets/images/delete-trash.svg" alt="trash" />
                    Confirm Delete
                    <div class="remove-buttons">
                        <button class="btn-yes">Delete</button>
                        <button class="btn-no">Cancel</button>
                    </div>
                </div>
            `
            this.append(popover)

            const btnYes = popover.querySelector('.btn-yes')
            const btnNo = popover.querySelector('.btn-no')

            btnNo.addEventListener('click', () => popover.close())

            for (const [key, element] of allEntry.entries()) {
                const { title, date, desc } = element
                // For Check Overview condition
                // Not is all entry show only 3 entries
                if (!isAllEntry && key == 3) break

                const entryCard = document.createElement('entry-card');
                entryCard.classList.add('entry-container');
                entryCard.setAttribute('data-title', title);
                entryCard.setAttribute('data-date', date);
                entryCard.setAttribute('data-desc', desc);
                entryCard.setAttribute('data-key', key);
                entryCard.setAttribute('is-entry-detail', 'false');

                /**
                 * Handle the remove entry event.
                 * @param {number} key - The key of the entry to be removed.
                 */
                entryCard.onRemove = (key) => this.handleRemoveEntry(key, popover, btnYes);

                // Append Entry Card to Entry List
                this.append(entryCard)
            }
        }
        this.classList.add('entry-list')
    }
    /**
     * Load the entries from local storage.
     * @returns {Array} The loaded entries.
     */
    loadEntries() {
        const entryObj = JSON.parse(localStorage.getItem('entries'))
        return entryObj
    }

    /**
     * Handle the remove entry event.
     * @param {number} key - The key of the entry to be removed.
     * @param {HTMLElement} popover - The popover element.
     * @param {HTMLElement} btnYes - The "yes" button element.
     */
    handleRemoveEntry(key, popover, btnYes) {
        console.log('object');
        popover.showModal();
        btnYes.addEventListener('click', () => {
            const entries = this.loadEntries();
            entries.splice(key, 1);
            localStorage.setItem('entries', JSON.stringify(entries));
            console.log('hello');
            // Refresh loading
            this.connectedCallback();
        })
    }

}
customElements.define('entry-list', EntryList)

