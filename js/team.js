//get the order list with common funtion 
const orderList = getTheElement('order-list');

//get the buttons with class name
const buttons = document.getElementsByClassName('player');

// getting the single button we use for of loop 
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        if (orderList.childNodes.length > 5) {
            alert("You can't add more than 5 player!")
            return;
        }
        //set the disabled attribute 
        button.setAttribute('disabled', true)
        //get the first child innertext as 'playerName'
        const playerName = event.target.parentNode.childNodes[1].innerText;
        //creat 'li' element
        const li = document.createElement('li');
        //set the li innertext 
        li.innerText = playerName;
        //set the li into the orderlist
        orderList.appendChild(li)
    })

}