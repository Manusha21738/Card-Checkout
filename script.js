document.addEventListener('DOMContentLoaded', () => {

    // Elements
    const cardWrapper = document.getElementById('card-wrapper');

    // Inputs
    const inputNumber = document.getElementById('input-number');
    const inputName = document.getElementById('input-name');
    const inputMonth = document.getElementById('input-month');
    const inputYear = document.getElementById('input-year');
    const inputCVV = document.getElementById('input-cvv');

    // Display Elements (on the card)
    const displayNumber = document.getElementById('display-number');
    const displayName = document.getElementById('display-name');
    const displayDate = document.getElementById('display-date');
    const displayCVV = document.getElementById('display-cvv');
    const displaySignature = document.getElementById('display-signature');

    // 1. Flip Card on CVV Focus
    inputCVV.addEventListener('focus', () => {
        cardWrapper.classList.add('flip');
    });

    inputCVV.addEventListener('blur', () => {
        cardWrapper.classList.remove('flip');
    });

    // 2. Card Number Formatting & Updating
    inputNumber.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits

        // Add space every 4 digits
        let formattedValue = '';
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) formattedValue += ' ';
            formattedValue += value[i];
        }

        e.target.value = formattedValue; // Update input value

        // Update Card Display
        if (value.length === 0) {
            displayNumber.innerText = '#### #### #### ####';
        } else {
            displayNumber.innerText = formattedValue;
        }
    });

    // 3. Name Updating
    inputName.addEventListener('input', (e) => {
        let value = e.target.value;
        if (value.length === 0) {
            displayName.innerText = 'FULL NAME';
            displaySignature.innerText = '';
        } else {
            displayName.innerText = value;
            displaySignature.innerText = value;
        }
    });

    // 4. Date Updating
    const updateDate = () => {
        const month = inputMonth.value || 'MM';
        const year = inputYear.value || 'YY';
        displayDate.innerText = `${month}/${year}`;
    };

    inputMonth.addEventListener('change', updateDate);
    inputYear.addEventListener('change', updateDate);

    // 5. CVV Updating
    inputCVV.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        displayCVV.innerText = value;
        
    });
});