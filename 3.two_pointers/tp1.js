/*
You are given an array 'prices' where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

// Return max profit
var maxProfit = function (prices) {
  let left = 0,
    result = 0,
    tempMax = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[left]) {
      tempMax = Math.max(tempMax, prices[i] - prices[left]);
    } else {
      left = i;
    }
    result = Math.max(result, tempMax);
  }
  return result;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
//Output: 5

// Return the index where we can derive the max profit from:
var maxProfitIndex = function (prices) {
  let buyIndex = 0,
    currentProfit = 0,
    maxProfit = 0,
    sellIndex = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[buyIndex]) {
      currentProfit = prices[i] - prices[buyIndex];
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
        sellIndex = i;
      }
    } else {
      buyIndex = i;
    }
  }
  return sellIndex;
};

console.log(maxProfitIndex([7, 1, 5, 3, 6, 4]));
//Output: 4
