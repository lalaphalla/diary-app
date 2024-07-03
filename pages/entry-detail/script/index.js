const elEntryCard = document.querySelector('entry-card')

const entryArr = JSON.parse(localStorage.getItem('entries')) || [];
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const key = urlParams.get('key')
const {title, date, desc} = entryArr[key]

elEntryCard.setAttribute('data-title', title);
elEntryCard.setAttribute('data-date', date);
elEntryCard.setAttribute('data-desc', desc);
elEntryCard.setAttribute('data-key', key);
elEntryCard.setAttribute('is-entry-detail', 'true');
elEntryCard.classList.add('entry-container')
// re-render the component to have data
elEntryCard.connectedCallback();
console.log(title, date, desc);
// console.log('object');