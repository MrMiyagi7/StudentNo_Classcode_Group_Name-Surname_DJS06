// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Exercises

// 1
provinces.forEach((province, index) =>
  console.log(`${names[index]} (${province})`)
);

// 2
const upperProvinces = provinces.map((province) => province.toUpperCase());
console.log(upperProvinces);

// 3
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// 4
const sortedProvinces = [...provinces].sort(); // Using spread operator to avoid mutating the original array.
console.log(sortedProvinces);

// 5
const nonCapeProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(`${nonCapeProvinces.length} provinces with out Cape remaining`);

// 6
const containsS = names.map((name) => name.toLowerCase().includes("s"));
console.log(containsS);

// 7
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

// Advanced Exercises

// 1
console.log(products.map((product) => product.product).join(", "));

// 2
console.log(products.filter((product) => product.product.length <= 5));

// 3
console.log(
  products
    .filter(
      (product) => String(product.price).trim() !== "" && !isNaN(product.price)
    ) // Convert price to string first
    .map((product) => ({ ...product, price: Number(product.price) })) // Convert valid prices to numbers
    .reduce((total, product) => total + product.price, 0) // Calculate total price
);

// 4
console.log(products.reduce((acc, product) => acc + product.product, ""));

// 5
console.log(
  (() => {
    const pricedProducts = products
      .filter(
        (product) =>
          String(product.price).trim() !== "" && !isNaN(product.price)
      )
      .map((product) => ({ ...product, price: Number(product.price) }));
    const highest = Math.max(...pricedProducts.map((product) => product.price));
    const lowest = Math.min(...pricedProducts.map((product) => product.price));
    return `Highest: ${highest}. Lowest: ${lowest}.`;
  })()
);
