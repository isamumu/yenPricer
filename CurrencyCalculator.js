import React, { useState } from "react";

const fetchRate = async () => {
    try {
        const response = await fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=b4431777018d4b3fb78f72e1081a14a5&symbols=JPY');
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        return Number(data.rates.JPY); // Return the rate
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching the exchange rate.");
    }
};

const calculatePriceWithCurrencyRates = async (fee) => {
    try {
        const rate = await fetchRate();
        if (!rate) {
            throw new Error("Rate is undefined or invalid.");
        }
        const oneToOneRatio = 100; // Customize this value
        const bufferRate = 0.1; // Customize this value
        const convertedBasePrice = fee / rate;

        const priceNew = convertedBasePrice * (1 + bufferRate * Math.max(0, (rate - oneToOneRatio) / oneToOneRatio));
        return parseFloat(priceNew.toFixed(2)); // Round to 2 decimal places
    } catch (error) {
        console.error("Error in calculatePriceWithCurrencyRates:", error);
        throw error;
    }
};

const CurrencyCalculator = () => {
    const [fixedFee, setFixedFee] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleCalculate = async () => {
        setError(null); // Reset error state
        setResult(null); // Reset result state
        try {
            if (!fixedFee.trim() || isNaN(Number(fixedFee))) {
                setError("Please enter a valid number for the fixed fee.");
                return;
            }

            const calculatedPrice = await calculatePriceWithCurrencyRates(Number(fixedFee));
            setResult(calculatedPrice); // Update the result state
        } catch (error) {
            setError(error.message || "An error occurred.");
        }
    };

    return (
        <div>
            <h1>Currency Conversion Calculator</h1>
            <div>
                <label>
                    Enter Fixed Fee (local currency):
                    <input
                        type="number"
                        value={fixedFee}
                        onChange={(e) => setFixedFee(e.target.value)}
                        placeholder="e.g., 44000"
                    />
                </label>
                <button onClick={handleCalculate}>Calculate</button>
            </div>
            {result !== null && (
                <div>
                    <h2>Price to Charge in Foreign Currency: ${result}</h2>
                </div>
            )}
            {error && (
                <div style={{ color: "red" }}>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default CurrencyCalculator;
