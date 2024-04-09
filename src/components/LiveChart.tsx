import React, { useEffect, useMemo, useState } from "react";
import { fetchStockData } from "../services";
import { formatStockData, FormattedData } from "../utils";
import ReactApexChart from "react-apexcharts";
import { candleStickOptions as defaultCandleStickOptions } from "../constants";

interface LiveChartProps {
  symbol: string;
}

const LiveChart: React.FC<LiveChartProps> = ({ symbol }) => {
  const [stockData, setStockData] = useState<{ [key: string]: any }>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStockData(symbol)
      .then((data) => {
        setStockData(data);
        setError(null); 
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message); // Set error message from backend response
        } else {
          setError("Error fetching stock data. Please try again later."); 
        }
      });
  }, [symbol]);

  const seriesData: FormattedData[] = useMemo(
    () => formatStockData(stockData),
    [stockData]
  );

  const options = {
    ...defaultCandleStickOptions,
    chart: {
      ...defaultCandleStickOptions.chart,
      type: "candlestick",
    },
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white rounded-lg shadow-lg p-4">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <ReactApexChart
            series={[
              {
                data: seriesData,
              },
            ]}
            options={options as any}
            type="candlestick"
          />
        )}
      </div>
    </div>
  );
};

export default LiveChart;
