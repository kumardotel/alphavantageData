let VITE_API_KEY = import.meta.env.VITE_API_KEY

export const fetchStockData = async (symbol: any) => {
    if (!VITE_API_KEY) {
        VITE_API_KEY = "demo";
    }

    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${VITE_API_KEY}`)
    const data = await response.json()
    return data
}