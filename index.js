// users to add, check, uncheck, and remove items from a shopping list.

// all of the classes for buttons are class = 'button-label' (All in spans)
// we want to change button to check & uncheck when each different button is selected
// do i create a new button called uncheck when check is clicked?
// how do i reverse back to "check"

//create a way to check if .button-label currently has text of 'check' or 'uncheck'


//this function checks if the .button-label is currently check or uncheck 
function isButtonNameCheck (item) {
    if(item = 'check') {
        true;
    } else {
        false;
    }
}



function changeCheckButton() {
    $('.button-label').on('click', event => {
        event.stopPropagation();
        event.preventDefault();
        $(event.currentTarget).empty();
        // establish the main state of the logic so you know how to move forward 
        // thats why we set the state in variable
        // if check = true, change to check and none
        // if uncheck = true, change to uncheck and line through
        var isButtonTrue = isButtonNameCheck($(event.currentTarget).innerText);
        console.log($(event.currentTarget).text());
        if(isButtonTrue = true) {
            // need line through once you click on button
            // need to target the parent span of the current target
            //$('.shopping-item-toggle').parents().eq(3).addClass('.shopping-item__checked');
            //$(event.currentTarget).parent().parent().prev().addClass('.shopping-item__checked');
            // change button label to uncheck
            $(event.currentTarget).text('uncheck');
        } else if (isButtonTrue = false) {
            // remove the line through 
            // need to target the parent span of the current target
            // $(event.currentTarget).parent('span').removeClass('.shopping-item__checked');
            // change button label to check
            $(event.currentTarget).text('check');
        }
    });  
}

$(changeCheckButton);