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
