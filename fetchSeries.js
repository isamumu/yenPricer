async function fetchSeries() {
    try {
        const isoDate = new Date();
        const dateObject = new Date(isoDate);

        // Subtract 5 days
        dateObject.setDate(dateObject.getDate() - 5);

        const updatedISODate = dateObject.toISOString().split('T')[0];
        const fullUrl = 'https://api.currencyfreaks.com/v2.0/timeseries?apikey=b4431777018d4b3fb78f72e1081a14a5&startDate=2022-06-01&endDate=2022-06-07&base=eur&symbols=pkr,usd';

        console.log("Request URL:", fullUrl);

        const response = await fetch(fullUrl);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Response Data:", data);

        const rates = data.historicalRatesList.map(entry => ({
            date: entry.date,
            rates: entry.rates,
        }));

        return rates;
    } catch (error) {
        console.error("Error fetching series:", error);
        throw error;
    }
}

// Call the function
(async () => {
    try {
        const rates = await fetchSeries();
        console.log("Rates:", rates);
    } catch (error) {
        console.error("Failed to fetch series:", error);
    }
})();
