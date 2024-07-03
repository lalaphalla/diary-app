/**
 * Create Form to use in overview and edit page
 * attribute: is-edit to check if the form is in overview or edit mode
 * @export
 * @class EntryForm
 * @extends {HTMLElement}
 */
export class EntryForm extends HTMLElement {
    constructor() {
        super()
        // Initialize entry array from local storage or create an empty array if none exists
        this.entryArr = JSON.parse(localStorage.getItem('entries')) || [];
    }
    connectedCallback() {
        // attribute
        const isEdit = this.getAttribute('is-edit') === 'true';
        const submit = isEdit ? 'Update' : 'Create'
        const cancel = isEdit ? 'Cancel' : 'Reset'
        // get key from URLSearchParams to pass to edit and delete
        const key = new URLSearchParams(window.location.search).get('key');

        this.innerHTML = `
            <form id="entry-form" class="entry-form" action="">
                <div class="input-head">
                    <input class="input-title" type="text" id="title" placeholder="Write title..." required />
                    <input class="input-date" type="date" id="date" />
                </div>
                <textarea class="input-textarea" id="desc" placeholder="Write your story ..." required></textarea>
                <div class="form-buttons">
                    <primary-button id="btn-submit" type="submit" >${submit}</primary-button>
                    <secondary-button id="btn-cancel">${cancel}</secondary-button>
                </div>

                
            </form>
        `

        // Add Event to the element
        this.setupEventListner(isEdit, key)

        // If in edit mode, populate the form with the existing entry data
        if (isEdit) {
            this.populateForm(key);
            this.classList.add('form-edit');
            this.querySelector('#desc').classList.add('form-desc-edit');
        }
        this.classList.add('block')
    }

    /**
     * @param {boolean} [isEdit=false] - Indicates if the form is in edit mode
     * @param {number} [key=0] - The key of the entry to be edited
     * @memberof EntryForm
     */
    setupEventListner(isEdit = false, key = 0) {
        const btnSubmit = this.querySelector('#btn-submit');
        const btnCancel = this.querySelector('#btn-cancel');
        const inputTitle = this.querySelector('#title');
        const inputDate = this.querySelector('#date');
        const inputDesc = this.querySelector('#desc');

        // Reset Form
        this.formReset();

        // Attach change event listeners to form inputs
        inputTitle.addEventListener('change', (e) => this.handleInputChange(e, btnCancel));
        inputDate.addEventListener('change', (e) => this.handleInputChange(e, btnCancel));
        inputDesc.addEventListener('change', (e) => this.handleInputChange(e, btnCancel));
        // Attach click event listeners to buttons
        btnSubmit.addEventListener('click', (e) => this.handleSubmit(e, isEdit, key));
        btnCancel.addEventListener('click', (e) => this.handleCancel(e, isEdit), false);
    }

    /**
     * Resets the form to its default state
     */
    formReset() {
        const form = this.querySelector('#entry-form');
        form.reset();
        form.querySelector('#date').value = new Date().toISOString().substring(0, 10);
        this.querySelector('#btn-cancel').setAttribute('disabled', '');
    }


    /**
     * Handles input change events to enable the cancel button when input changes
     * @param {Event} e - The input change event
     * @param {HTMLElement} btnCancel - The cancel button element
     */
    handleInputChange(e, btnCancel) {
        if (e.target.value) {
            btnCancel.removeAttribute('disabled');
        }
    }

    /**
     * Handles form submission
     * @param {Event} event - The form submission event
     * @param {boolean} isEdit - Indicates if the form is in edit mode
     * @param {number} key - The key of the entry to be edited
     */
    handleSubmit(event, isEdit, key = 0) {
        event.preventDefault(); // Prevent form from reloading
        
        const form = this.querySelector('#entry-form');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        // form.checkValidity();
        const title = this.querySelector('#title').value;
        const date = this.querySelector('#date').value;
        const desc = this.querySelector('#desc').value;
        const created = new Date().toLocaleString();
        const entry = { title, date, desc, created };

        // Add or edit the entry based on the form mode
        if (isEdit) {
            this.editEntry(entry, key);
        } else {
            this.addEntry(entry);
        }
    }

    /**
     * Handles form cancel action
     * @param {Event} event - The cancel button click event
     */
    handleCancel(event, isEdit) {
        event.preventDefault(); // Prevent form from reloading
        // If in edit mode, go back to the previous page, otherwise reset the form
        if (isEdit) {
            window.history.back();
        } else {
            this.formReset();
        }
    }

    /**
     * Adds a new entry to the local storage and resets the form
     * @param {Object} entry - The entry object to be added
     */
    addEntry(entry) {
        // Get new entry array because of after remove entry if not it will get the old array
        const entryArr = JSON.parse(localStorage.getItem('entries')) || [];
        const isCreate = this.getAttribute('is-create') === 'true';
        entryArr.unshift(entry);
        localStorage.setItem('entries', JSON.stringify(entryArr));
        if (!isCreate) {
            this.formReset();
            // Refresh the entry list
            document.querySelector('.entry-list').connectedCallback();
        } else {
            location.href = `/pages/all-entry/index.html`
        }


    }

    /**
     * Edits an existing entry in the local storage and navigates to the view page
     * @param {Object} entry - The entry object to be edited
     * @param {string} key - The key of the entry to be edited
     */
    editEntry(entry, key) {
        this.entryArr[key] = entry;
        localStorage.setItem('entries', JSON.stringify(this.entryArr));
        window.location.href = `/pages/entry-detail/index.html?key=${key}`;
    }

    /**
     * Populates the form with existing entry data for editing
     * @param {string} key - The key of the entry to be edited
     */
    populateForm(key) {
        const { title, date, desc } = this.entryArr[key];
        this.querySelector('#title').value = title;
        this.querySelector('#date').value = date;
        this.querySelector('#desc').value = desc;
        this.querySelector('#btn-cancel').removeAttribute('disabled');
    }
}

customElements.define('entry-form', EntryForm)