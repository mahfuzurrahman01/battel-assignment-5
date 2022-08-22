const buttons = document.getElementsByClassName('player');
// getting the single button we use for of loop 
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        button.setAttribute('disabled', true)
        const playerName = event.target.parentNode.childNodes[1].innerText;
        const orderList = document.getElementById('order-list');
        const li = document.createElement('li');
        li.innerText = playerName;
        orderList.appendChild(li)
        console.log(orderList.childNodes)
    })

}