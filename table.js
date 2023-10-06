const productsData = [
  { name: "Красный велосипед", price: 349.99, quantity: 10, lastUpdated: "2023-09-10" },
  { name: "Смартфон Galaxy Pro", price: 899.99, quantity: 5, lastUpdated: "2023-09-12" },
  { name: "Люксовые кроссовки AirX", price: 199.99, quantity: 20, lastUpdated: "2023-09-14" },
  { name: "Умный термостат EcoTemp", price: 149.99, quantity: 15, lastUpdated: "2023-09-16" },
  { name: "Профессиональная фотокамера", price: 1249.99, quantity: 8, lastUpdated: "2023-09-18" },
  { name: "Мультимедийный проектор CinemaMax", price: 799.99, quantity: 12, lastUpdated: "2023-09-20" },
  { name: "Стильная кожаная сумка", price: 159.99, quantity: 25, lastUpdated: "2023-09-22" },
  { name: "Ноутбук UltraBook Pro", price: 1299.99, quantity: 7, lastUpdated: "2023-09-24" },
  { name: "Звуковая система Hi-Fi", price: 499.99, quantity: 18, lastUpdated: "2023-09-26" },
  { name: "Дизайнерские очки SunStyle", price: 89.99, quantity: 30, lastUpdated: "2023-09-28" },
  { name: "Электрический скейтборд PowerRide", price: 399.99, quantity: 10, lastUpdated: "2023-09-30" },
  { name: "Наушники NoiseCancel", price: 149.99, quantity: 22, lastUpdated: "2023-10-02" },
  { name: "Кафельная плитка ArtDeco", price: 7.99, quantity: 200, lastUpdated: "2023-10-04" },
  { name: "Кофемашина EspressoMaster", price: 299.99, quantity: 6, lastUpdated: "2023-10-06" },
  { name: "Складной водонепроницаемый рюкзак", price: 69.99, quantity: 35, lastUpdated: "2023-10-08" },
  { name: "Геймерская мышь SpeedStrike", price: 49.99, quantity: 50, lastUpdated: "2023-10-10" },
  { name: "Фитнес-трекер FitPro", price: 79.99, quantity: 40, lastUpdated: "2023-10-12" },
  { name: "Виниловая пластинка The Groove", price: 19.99, quantity: 75, lastUpdated: "2023-10-14" },
  { name: "Подушка с памятью для шеи", price: 29.99, quantity: 60, lastUpdated: "2023-10-16" },
  { name: "Чайник с металлической ручкой", price: 24.99, quantity: 28, lastUpdated: "2023-10-18" }
];

const productTitle = [
  { productName: "Name" },
  { productPrice: "Price" },
  { productQuantity: "Quantity" },
  { productLastUpdated: "lastUpdated" }
]

function createProduct(product){
  const productRow = document.createElement("div")
  productRow.classList.add("product-row");

  const productName = document.createElement("div")
  productName.textContent = product.name
  productRow.appendChild(productName)

  const productPrice = document.createElement("div");
  productPrice.textContent = product.price;
  productRow.appendChild(productPrice);

  const productQuantity = document.createElement("div");
  productQuantity.textContent = product.quantity;
  productRow.appendChild(productQuantity);

  const productLastUpdated = document.createElement("div");
  productLastUpdated.textContent = product.lastUpdated;
  productRow.appendChild(productLastUpdated);


  return productRow
}

function createProductTitle(productTitle){
  const productTitle = document.createElement("div")
  productTitle.classList.add("product-title")

   const productTitleName = document.createElement("div")
  productTitleName.textContent = product.name
  productTitle.appendChild(productName)

  const productTitlePrice = document.createElement("div");
  productTitlePrice.textContent = product.price;
  productTitle.appendChild(productPrice);

  const productTitleQuantity = document.createElement("div");
  productTitleQuantity.textContent = product.quantity;
  productTitle.appendChild(productQuantity);

  const productTitleLastUpdated = document.createElement("div");
  productTitleLastUpdated.textContent = product.lastUpdated;
  productTitle.appendChild(productLastUpdated);

  return productTitle;
}



function updateTable(sortBy) {
  // Сортируем массив продуктов в зависимости от выбранного столбца
  if (sortBy === "productName") {
    productsData.sort((a, b) => a.productName - b.productName);
  } else if (sortBy === "productPrice") {
    productsData.sort((a, b) => a.productPrice - b.productPrice);
  } else if (sortBy === "productQuantity") {
    productsData.sort((a, b) => a.productQuantity - b.productQuantity);
  } else if (sortBy === "productlastUpdated") {
    productsData.sort((a, b) => b.productLastUpdated - a.productLastUpdated);
  }
}
function updateTable() {
  const tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = "";

  productsData.forEach((product) => {
    const productRow = createProduct(product);
    tableContainer.appendChild(productRow);
  });
}

document.getElementById("sort-by-name").addEventListener("click", () => {
  updateTable("name");
});

document.getElementById("sort-by-price").addEventListener("click", () => {
  updateTable("price");
});

document.getElementById("sort-by-quantity").addEventListener("click", () => {
  updateTable("quantity");
});

document
  .getElementById("sort-by-last-updated").addEventListener("click", () => {
    updateTable("lastUpdated");
  });

// Изначально отобразите таблицу без сортировки
window.addEventListener("load", () => {
  updateTable();
});
  
  
 
