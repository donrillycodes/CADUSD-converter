
// Exchange rates
const exchangeRates = {
    USD: {
        CAD: 1.40,
        USD: 1
    },
    CAD: {
        USD: 0.72,
        CAD: 1
    }
};

//Function to convert the currency
function convert() {
    let amountInput = document.getElementById("amount").value;
    let currencyFrom = document.getElementById("currency-From").value;
    let currencyTo = document.getElementById("currency-To").value;
    let result = document.getElementById("result");

    //Remove style attribute from function
    result.removeAttribute("style");


    // Validate input
    if (amountInput.length === 0) {
        result.textContent = 'Please enter an amount';
        result.style.color = "red";
        return;
    }


    // Perform conversion
    const rate = exchangeRates[currencyFrom][currencyTo];
    const convertedAmount = (Number(amountInput) * rate).toFixed(2);

    // Display result
    result.textContent = `${amountInput} ${currencyFrom} = ${convertedAmount} ${currencyTo}`;
}
