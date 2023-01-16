/* Object constructor */
import AwesomeBooks from './modules/awesomebooks.js';
import {
  list, add, contact, showlist, addshow, contactshow,
} from './modules/dynamic.js';

/* Create booksArray and set it to empty if localStorage is null */

const btnAdd = document.getElementById('btn-add');
const listSec = document.getElementById('book-list');

/* link events */

btnAdd.addEventListener('click', AwesomeBooks.addBook);
listSec.addEventListener('click', AwesomeBooks.removeBook);

/* run */

AwesomeBooks.showList();

showlist.addEventListener('click', () => {
  list.style.display = 'flex';
  add.style.display = 'none';
  contact.style.display = 'none';
});

addshow.addEventListener('click', () => {
  list.style.display = 'none';
  add.style.display = 'flex';
  contact.style.display = 'none';
});

contactshow.addEventListener('click', () => {
  list.style.display = 'none';
  add.style.display = 'none';
  contact.style.display = 'flex';
});
