// TODO: this file! :)
document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('number');
    const numberBankOutput = document.querySelector('#numberBank output');
    const addButton = document.querySelector('form button'); 
    const sortOneButton = document.getElementById('sortOne');
    const oddsOutput = document.querySelector('#odds output');
    const evensOutput = document.querySelector('#evens output');

    if (!addButton) {
        console.error('Add button not found!');
        return; 
    }

    addButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        const numberValue = numberInput.value; 
        if (numberValue) { 
            const newNumber = document.createElement('span');
            newNumber.textContent = numberValue + ' ';
            numberBankOutput.appendChild(newNumber); 
            numberInput.value = ''; 
        } else { 
            alert('Please Enter A Number');  
        }
    });

    sortOneButton.addEventListener('click', function() {
        const firstNumberElement = numberBankOutput.querySelector('span'); 
        if (firstNumberElement) {
            const firstNumber = parseInt(firstNumberElement.textContent.trim(), 10); 
            firstNumberElement.remove();

            if (firstNumber % 2 === 0) {
                const newEven = document.createElement('span');
                newEven.textContent = firstNumber + ' ';
                evensOutput.appendChild(newEven);
            } else {
                const newOdd = document.createElement('span');
                newOdd.textContent = firstNumber + ' ';
                oddsOutput.appendChild(newOdd);
            }
        } else {
            alert('No numbers in the bank to sort!');
        }
    }); 
}); 

