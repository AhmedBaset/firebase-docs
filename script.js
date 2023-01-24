const all = document.querySelectorAll('details');

function expandAll() {
   all.forEach(el => el.open = true);
}