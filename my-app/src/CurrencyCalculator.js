import React, { useState } from "react";
import {
    AreaChart, Area,
    CartesianGrid, XAxis, YAxis
} from 'recharts';

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

const calculatePriceWithCurrencyRates = async (fee, shippingFee) => {
    try {
        const rate = await fetchRate();
        if (!rate) {
            throw new Error("Rate is undefined or invalid.");
        }
        const oneToOneRatio = 100; // Customize this value
        const bufferRate = 0.15; // Customize this value
        // Paypal overhead
        const fixedFee = 49;
        const percentageFee = 0.044;

        // adjust for paypal
        const augmentedFee = (fee + fixedFee) / (1 - percentageFee);
        const augmentedShippingFee = (shippingFee + fixedFee) / (1 - percentageFee);
        const convertedBasePrice = augmentedFee / rate;
        const convertedShippingPrice = augmentedShippingFee / rate;

        const priceNew = convertedBasePrice * (1 + bufferRate * Math.max(0, (rate - oneToOneRatio) / oneToOneRatio));
        const newTotal = priceNew + convertedShippingPrice;
        console.log(priceNew)
        console.log(convertedShippingPrice)
        return [parseFloat(newTotal.toFixed(2)), rate]; // Round to 2 decimal places
    } catch (error) {
        console.error("Error in calculatePriceWithCurrencyRates:", error);
        throw error;
    }
};

const CurrencyCalculator = () => {
    const [fixedFee, setFixedFee] = useState("");
    const [shippingFee, setShippingFee] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [rate, setRate] = useState("");

    const handleCalculate = async () => {
        setError(null); // Reset error state
        setResult(null); // Reset result state
        try {
            if (!fixedFee.trim() || isNaN(Number(fixedFee))) {
                setError("Please enter a valid number for the fixed fee.");
                return;
            }
            const calculatedPrice = await calculatePriceWithCurrencyRates(Number(fixedFee), Number(shippingFee));
            setResult(calculatedPrice[0]); // Update the result state
            setRate(calculatedPrice[1]);
            console.log(rate)
        } catch (error) {
            setError(error.message || "An error occurred.");
        }
    };

    return (
        <div>
            <div style={styles.container}>
                <h1 style={styles.title}>カネハチ米国価格計算機</h1>
                <div style={styles.inputContainer}>
                    <label style={styles.label}>
                        送料を入力してください:
                        <input
                            type="number"
                            value={shippingFee}
                            onChange={(e) => setShippingFee(e.target.value)}
                            placeholder="例: 4400"
                            style={styles.inputBox}
                        />
                        <span style={styles.inputLabel}><b>JPY</b></span>
                    </label>

                    <label style={styles.label}>
                        値段を入力してください:
                        <input
                            type="number"
                            value={fixedFee}
                            onChange={(e) => setFixedFee(e.target.value)}
                            placeholder="例: 44000"
                            style={styles.inputBox}
                        />
                        <span style={styles.inputLabel}><b>JPY</b></span>
                    </label>
                    <button onClick={handleCalculate} style={styles.button}>計算</button>
                </div>
                {result !== null && (
                    <div style={styles.resultBox}>
                        <h2>新しい値段: ${result}</h2>
                        <h2>(1 USD = ¥{rate})</h2>
                    </div>
                )}
                {error && (
                    <div style={styles.errorBox}>
                        <p>{error}</p>
                    </div>
                )}
            </div>
        </div>

    );
};

const styles = {
    container: {
        fontFamily: "'Arial', sans-serif",
        display: 'flex',
        alignItems: 'center',
        maxWidth: "600px",
        margin: "0 auto", // Centers horizontally
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        position: "absolute", // Required for vertical centering
        top: "50%", // Pushes the container down 50% of the viewport height
        left: "50%", // Pushes the container right 50% of the viewport width
        transform: "translate(-50%, -50%)", // Offsets the position to center
    },
    title: {
        fontSize: "35px",
        color: "#B53737",
        marginBottom: "20px",
        fontWeight: "bold",
        fontFamily: "Poppins, sans-serif",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
    },
    label: {
        fontSize: "16px",
        color: "#555",
    },
    inputBox: {
        width: "100%",
        maxWidth: "300px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontSize: "16px",
        marginTop: "5px",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#5bb450",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s",
    },
    resultBox: {
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "#e6ffe6",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    errorBox: {
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "#ffe6e6",
        borderRadius: "8px",
        color: "#d9534f",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
};

export default CurrencyCalculator;
