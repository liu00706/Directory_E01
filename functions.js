// functions.js
// Only edit this file

// 1) list(clients) -> HTML string (map)
function list(clientsArr) {
  return clientsArr
    .map(
      (client) => `
<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
  ${client.name}
  <strong>$ ${client.balance.toFixed(2)}</strong>
</li>`
    )
    .join("");
}

// 2) order(clients, property) -> sorted array (sort)
// NOTE: sort() mutates, so copy first to avoid messing up original array order.
function order(clientsArr, property) {
  return [...clientsArr].sort((a, b) => {
    const aVal = a[property];
    const bVal = b[property];

    // handle string vs number safely
    if (typeof aVal === "string" && typeof bVal === "string") {
      return aVal.localeCompare(bVal);
    }
    return aVal - bVal;
  });
}

// 3) total(clients) -> number sum of balances (reduce)
function total(clientsArr) {
  return clientsArr.reduce((sum, client) => sum + client.balance, 0);
}

// 4) info(index) -> single client object (find)
// uses the global `clients` array from clients.js
function info(index) {
  return clients.find((client) => client.index === index);
}

// 5) search(query) -> array of matching clients (filter)
// uses the global `clients` array from clients.js
function search(query) {
  const q = query.toLowerCase().trim();
  return clients.filter((client) => client.name.toLowerCase().includes(q));
}
