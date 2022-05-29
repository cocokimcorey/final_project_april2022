function addItem() {
    const value = document.querySelector('[data-item]').value;
    const ul = document.querySelector('[data-list]')
    const li = document.createElement('li')
    li.innerHTML = value
    ul.appendChild(li)
    document.querySelector('[data-item]').value = ""; /*this removes the text that the user has entered once the 'add button' is pressed*/
}