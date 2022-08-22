//funtion for: get Element by id function 
function getTheElement(elementId) {
    const element = document.getElementById(elementId);
    return element;

}
//funtion for: get the input value funtion
function inputValue(elementId) {
    const field = document.getElementById(elementId);
    const fieldValue = parseFloat(field.value);
    return fieldValue;
}
//funtion for: set the innerText 
function updateInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
//function for: only getting the field
function getTheField(elementId) {
    const field = document.getElementById(elementId);
    return field;
}
//funtion for getting innertext
function getInnerText(elementId) {
    const element = document.getElementById(elementId);
    const elementInnerText = parseFloat(element.innerText);
    return elementInnerText;
}