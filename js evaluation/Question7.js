// You have been provided with an array of product objects. Each product object contains the following properties: **`productName`**, **`category`**, **`quantity`**, **`price`**, and **`rating`**. Your task is to create a function **`groupAndSortProducts`** using only Higher-Order Functions that takes this array of products as input and returns an object where products are grouped by their categories. Additionally, within each category, the products should be sorted in descending order based on their ratings.

// Write a function **`groupAndSortProducts`** that performs the following tasks using only Higher-Order Functions:

// 1. Group the products by their categories.
// 2. Sort the products within each category based on their ratings in descending order.
// 3. Return an object where keys are category names and values are arrays containing products sorted by rating.

// Ensure that the function handles the case where there are no products in a particular category.
const products = [
  {
    productName: "Laptop",
    category: "Electronics",
    quantity: 10,
    price: 1200,
    rating: 4.5,
  },
  {
    productName: "Smartphone",
    category: "Electronics",
    quantity: 15,
    price: 800,
    rating: 4.2,
  },
  {
    productName: "Headphones",
    category: "Electronics",
    quantity: 20,
    price: 50,
    rating: 4.0,
  },
  {
    productName: "Backpack",
    category: "Fashion",
    quantity: 30,
    price: 50,
    rating: 4.7,
  },
  {
    productName: "Shoes",
    category: "Fashion",
    quantity: 25,
    price: 80,
    rating: 4.3,
  },
  {
    productName: "T-Shirt",
    category: "Fashion",
    quantity: 40,
    price: 20,
    rating: 4.8,
  },
  {
    productName: "Desk",
    category: "Furniture",
    quantity: 5,
    price: 300,
    rating: 4.6,
  },
  {
    productName: "Chair",
    category: "Furniture",
    quantity: 8,
    price: 150,
    rating: 4.4,
  },
  {
    productName: "Table",
    category: "Furniture",
    quantity: 7,
    price: 200,
    rating: 4.1,
  },
  {
    productName: "Bookshelf",
    category: "Furniture",
    quantity: 3,
    price: 100,
    rating: 4.9,
  },
  {
    productName: "Camera",
    category: "Photography",
    quantity: 12,
    price: 500,
    rating: 4.7,
  },
  {
    productName: "Lens",
    category: "Photography",
    quantity: 6,
    price: 250,
    rating: 4.5,
  },
];

function groupAndSortProducts(products) {
  // Group products by category using reduce
  const grouped = products.reduce((acc, product) => {
    // If the category doesn't exist, create an empty array for it
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    // Add the product to the appropriate category
    acc[product.category].push(product);
    return acc;
  }, {});

  // Sort products within each category by rating in descending order
  for (let category in grouped) {
    grouped[category].sort((a, b) => b.rating - a.rating);
  }

  return grouped;
}

// Test the function
const groupedAndSortedProducts = groupAndSortProducts(products);
console.log(groupedAndSortedProducts);
//Expected output
// {
//   Electronics: [
//     { productName: "Laptop", category: "Electronics", quantity: 10, price: 1200, rating: 4.5 },
//     { productName: "Smartphone", category: "Electronics", quantity: 15, price: 800, rating: 4.2 },
//     { productName: "Headphones", category: "Electronics", quantity: 20, price: 50, rating: 4.0 }
//   ],
//   Fashion: [
//     { productName: "T-Shirt", category: "Fashion", quantity: 40, price: 20, rating: 4.8 },
//     { productName: "Backpack", category: "Fashion", quantity: 30, price: 50, rating: 4.7 },
//     { productName: "Shoes", category: "Fashion", quantity: 25, price: 80, rating: 4.3 }
//   ],
//   Furniture: [
//     { productName: "Bookshelf", category: "Furniture", quantity: 3, price: 100, rating: 4.9 },
//     { productName: "Desk", category: "Furniture", quantity: 5, price: 300, rating: 4.6 },
//     { productName: "Chair", category: "Furniture", quantity: 8, price: 150, rating: 4.4 },
//     { productName: "Table", category: "Furniture", quantity: 7, price: 200, rating: 4.1 }
//   ],
//   Photography: [
//     { productName: "Camera", category: "Photography", quantity: 12, price: 500, rating: 4.7 },
//     { productName: "Lens", category: "Photography", quantity: 6, price: 250, rating: 4.5 }
//   ]
// }
