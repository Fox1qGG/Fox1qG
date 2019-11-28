const form = document.querySelector('form');
const ol = document.querySelector('ol');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
localStorage.setItem('items', JSON.stringify(itemArray));
const data = JSON.parse(localStorage.getItem('items'))
const LiMaker = text => {
    const li = document.createElement('li');
    li.textContent = text;
    ol.appendChild(li);
}
form.addEventListener('submit', function(e) {e.preventDefault()

itemArray.push(input.value)
localStorage.setItem('items', JSON.stringify(itemArray))
LiMaker(input.value)
input.value='';
})

data.forEach(item => {
 LiMaker(item)   
});
button.addEventListener('click', function() {
    localStorage.clear()
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild)
    }
    
})