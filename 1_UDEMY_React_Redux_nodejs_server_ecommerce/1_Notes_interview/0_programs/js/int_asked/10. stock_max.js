//prices = [10,2,4,3,8,5,9,1,4];
//Find the max profit from the given stock price array

function maxProfit(prices) {
    if (prices.length < 2) {
        return 0; // No profit can be made with less than 2 prices
    }

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            const potentialProfit = prices[i] - minPrice;
            if (potentialProfit > maxProfit) {
                maxProfit = potentialProfit;
            }
        }
    }

    return maxProfit;
}

// Example usage:
const prices = [10, 2, 4, 3, 8, 5, 9, 1, 4];
const result = maxProfit(prices);
console.log("Max profit:", result); // Output: Max profit: 7
