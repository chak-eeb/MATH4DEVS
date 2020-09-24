function roll(min, max, floatFlag) {
  let r = Math.random() * (max - min) + min;
  return floatFlag ? r : Math.floor(r);
}

let possibleProducts = [
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🥭",
  "🍎",
  "🍏",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🥝",
  "🍅",
  "🥥",
  "🥑",
  "🍆",
  "🥔",
  "🥕",
  "🌽",
  "🌶",
  "🥒",
  "🥬",
  "🥦",
];

let products = [...Array(5)].map((_, i) => {
  return {
    index: i,
    title: possibleProducts[roll(0, possibleProducts.length)],
    weight: roll(6, 20, 1).toFixed(2),
    price: roll(1, 10, 1).toFixed(2),
    count: roll(1, 6),
  };
});
console.log(products);

let cartContainer = document.getElementById("ShoppingCart");
let cartHtml = "";

products.forEach((product) => {
  cartHtml += `<div class="product">
  <div> ${product.title}</div>
  <div> \$${product.price}</div>
  <div> ${product.count}</div>
  <div> ${product.weight}oz</div>
  </div>`;
});

cartContainer.innerHTML = cartHtml;

let prodTotal = products
  .reduce((acc, product) => {
    return acc + parseFloat(product.price) * product.count;
  }, 0)
  .toFixed(2);
console.log(prodTotal);

let tot = document.getElementById("total");
tot.innerHTML = `Total: \$${prodTotal}`;

let taxField = document.getElementById("tax");
let taxRate = roll(5, 10, 1).toFixed(1) / 100;
let taxAmount = (prodTotal * taxRate).toFixed(2);
taxField.innerHTML = `Tax: \$${taxAmount}`;

let weight = document.getElementById("weight");
let totWeight = products
  .reduce((acc, product) => {
    return acc + parseFloat(product.weight);
  }, 0)
  .toFixed(2);
weight.innerHTML = `Weight: ${totWeight}oz`;
