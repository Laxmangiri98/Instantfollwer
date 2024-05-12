document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Coinbase Commerce SDK with your API key
  const commerce = new CoinbaseCommerceNode.Commmerce({
    apiKey: "37e880c0-ebe9-4940-a1e4-b68811a24339",
  });

  // Fetch account balance
  commerce.accounts
    .getBalance()
    .then((balance) => {
      // Display the balance
      document.getElementById(
        "balance"
      ).innerHTML = `Account Balance: ${balance.amount} ${balance.currency}`;
    })
    .catch((error) => {
      console.error("Error fetching account balance:", error);
    });
});
