/**
 * Calculate the price to charge factoring in PayPal fees and currency conversion.
 *
 * @param {number} fixedFee - The PayPal fixed fee in local currency (e.g., 0.49 for $0.49).
 * @returns {number} - The price to charge the buyer in foreign currency.
 */

const oneToOneRatio = 100
const bufferRate = 0.1

async function fetchRate() {
    try {
        const response = await fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=b4431777018d4b3fb78f72e1081a14a5&symbols=JPY');
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        console.log(Number(data.rates.JPY)); // Log the rate
        return Number(data.rates.JPY); // Return the rate
    } catch (error) {
        console.error(error); // Log the error
    }
}

async function calculatePriceWithCurrencyRates(fixedFee) {
    try {
        const rate = await fetchRate(); // Await the result of fetchRate
        if (!rate) {
            throw new Error("Rate is undefined or invalid");
        }

        const bufferRate = 0.1; // Example value
        const oneToOneRatio = 110; // Example value
        const convertedBasePrice = fixedFee / rate;

        const priceNew = convertedBasePrice * (1 + bufferRate * Math.max(0, (rate - oneToOneRatio) / oneToOneRatio));
        return parseFloat(priceNew.toFixed(2)); // Round to 2 decimal places

    } catch (error) {
        console.error("Error in calculatePriceWithCurrencyRates:", error);
    }
}

const priceToChargeForeign = await calculatePriceWithCurrencyRates(44000);
console.log(`Price to charge in foreign currency: $${priceToChargeForeign}`);
