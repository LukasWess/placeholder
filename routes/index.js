var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const stockData = [
    { name: "S&P 500", price: "4,185.43", change: 0.75 },
    { name: "NASDAQ", price: "12,888.28", change: -0.26 },
    { name: "Dow Jones", price: "33,874.85", change: 0.5 },
    { name: "FTSE 100", price: "7,032.30", change: -0.15 },
    { name: "DAX", price: "15,216.27", change: 0.35 },
    { name: "CAC 40", price: "6,287.07", change: 0.2 },
    { name: "Nikkei 225", price: "29,518.34", change: -0.1 },
    { name: "Shanghai Composite", price: "3,441.91", change: 0.05 },
    { name: "Hang Seng", price: "28,842.13", change: -0.3 },
    { name: "ASX 200", price: "7,023.10", change: 0.4 },
  ];

  const weather = {
    city: "Bergen",
    temperature: 6,
    condition: "Partly Cloudy",
  };

  const news = ["Incomming twitter feed", "Incomming twitter feed"];

  res.render("index", {
    title: "Express",
    headerTitle: "kinda wierd no? this whole thing called life",
    stockData: stockData,
    weather: weather,
    news: news,
  });
});

module.exports = router;
