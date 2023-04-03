
const items = ['Item 1', 'Item 2', 'Item 3'];
const list = document.querySelector('ul');
const listItems = list.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].textContent = items[i];
}

