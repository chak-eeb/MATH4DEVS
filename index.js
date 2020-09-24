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
  </div>`;
});

cartContainer.innerHTML = cartHtml;
