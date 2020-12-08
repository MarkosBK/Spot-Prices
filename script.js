

// Set your API key here
const APIKEY = "ckey_3be6b9bf4cee496398a6cd1d4a";
// Token table reset
const tableRef = document.getElementById('tokenTable').getElementsByTagName('tbody')[0];
tableRef.innerHTML = "";

// Covalent API request setup
const url = new URL(`https://api.covalenthq.com/v1/pricing/tickers/`);
url.search = new URLSearchParams({
    key: APIKEY,
    tickers: ["BTC", "WETH", "AAVE", "UNI", "YFI"]
})

// Use Fetch API to get Covalent data and display in token table
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let tokens = data.data.items;
    return tokens.map(function(token) { // Map through the results and for each run the code below
    tableRef.insertRow().innerHTML = 
        `<th scope="row" class="logoTh pr-0"><img src=${token.logo_url} class="logo" alt="${token.contract_name}"></th>` +
        `<td> ${token.contract_name} </td>` +
        `<td> ${token.contract_ticker_symbol} </td>` +
        `<td> $${parseFloat(token.quote_rate).toFixed(2)} </td>`
    })
})

