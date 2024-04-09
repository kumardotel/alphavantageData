
# Stock Data Display App

This is a small React application that fetches and displays stock data using the Alpha Vantage API. The application is built using TypeScript and Tailwind CSS for styling.




## Installation

Clone the project

```bash
  git clone git@github.com:kumardotel/alphavantageData.git
```

Navigate to the project directory

```bash
  cd alphavantageData
```

Install dependencies using npm or yarn

```bash
  npm install
  # or
  yarn install
```

Create a .env file in the root directory of the project. If you have an API key from Alpha Vantage, add it to the .env file as follows:

```bash
  VITE_API_KEY=your-api-key
```
If you don't have an API key, the application will use the demo API key provided by Alpha Vantage.

Running the Application

```bash
  npm run dev
  # or
  yarn dev
```


## Features

- Displays stock data in a candlestick pattern
- Responsive design for optimal viewing on various devices.



## Technologies Used

- React
- React-apexcharts
- TypeScript
- Tailwind CSS




## API Reference

#### Get stock data

```http
  GET https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${VITE_API_KEY}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `VITE_API_KEY` | `string` | **Required**. Your API key |
| `symbol` | `string` | **Required**. Stock Symbol |


