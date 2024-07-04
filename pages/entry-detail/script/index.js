// Select the entry-card element
const entryCard = document.querySelector('entry-card');

// Retrieve the entry array from local storage or create an empty array if none exists
const entryArr = JSON.parse(localStorage.getItem('entries')) || [];

// Get the key parameter from the URL query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const key = urlParams.get('key');

// Get the title, date, and description of the entry associated with the key
const { title, date, desc } = entryArr[key];

// Set the data attributes of the entry-card element with the entry information
entryCard.setAttribute('data-title', title);
entryCard.setAttribute('data-date', date);
entryCard.setAttribute('data-desc', desc);
entryCard.setAttribute('data-key', key);
entryCard.setAttribute('is-entry-detail', 'true');
entryCard.classList.add('entry-container');

// Re-render the component to have the updated data
entryCard.connectedCallback();
