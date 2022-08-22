// calculate button click event start here
document.getElementById('calculate').addEventListener('click', function () {
    // get the budget field value with common funtion from utilities.js file
    const budgetFieldValue = inputValue('per-player-budget');
    // condition for empty field 
    if (isNaN(budgetFieldValue) || budgetFieldValue < 0) {
        alert('Please input valid digits only!')
        //reset the field
        const budgetField = getTheField('per-player-budget');
        budgetField.value = '';
        return;
    }

    // get the order list with common funtion using from utilities file
    const orderlist = getTheElement('order-list');
    //length-1 is using for 
    const orderlistItems = orderlist.childNodes.length - 1;
    //condition for empty selection
    if (orderlist.childNodes.length - 1 === 0) {
        alert('First you have to select players!');
        return;
    }
    //multiplication 
    const playerExpenses = budgetFieldValue * orderlistItems;
    //set the playerExpenses value to the player expanse field;
    updateInnerText('player-expenses', playerExpenses);
})
// total calculation button event start here 
document.getElementById('calculate-total').addEventListener('click', function () {
    // get the field value of manager and coach 
    const ManagerFieldValue = inputValue('manager-budget');
    const coachFieldValue = inputValue('coach-budget');
    // condition for empty field 
    if (isNaN(ManagerFieldValue) || isNaN(coachFieldValue) || ManagerFieldValue < 0 || coachFieldValue < 0) {
        alert('Input error : input should be in digits and not should be a negetive number!');
        return;
    }
    // get the inner text of player expenses 
    const playerExpensesInnerText = getInnerText('player-expenses');
    // sum of total cost 
    const totalExpenses = ManagerFieldValue + coachFieldValue + playerExpensesInnerText;
    //set the value to the total field
    updateInnerText('total-expense', totalExpenses);
})