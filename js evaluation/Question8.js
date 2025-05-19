// you have been provided with data representing the inventory and sales of a supermarket. The data structure is as follows:

const supermarketData = {
  supermarketName: "SuperMart",
  location: "Cityville",
  products: {
    electronicsSection: {
      inventory: {
        laptop: { available: 20, price: 800 },
        smartphone: { available: 30, price: 500 },
        tablet: { available: 15, price: 300 },
      },
      sales: [
        { id: 1, items: ["laptop", "tablet"], total: 1100 },
        { id: 2, items: ["smartphone", "tablet"], total: 800 },
        { id: 3, items: ["laptop", "smartphone"], total: 1300 },
      ],
    },
    clothingSection: {
      inventory: {
        shirt: { available: 50, price: 25 },
        jeans: { available: 40, price: 40 },
        dress: { available: 30, price: 60 },
      },
      sales: [
        { id: 1, items: ["shirt", "jeans"], total: 60 },
        { id: 2, items: ["dress", "shirt"], total: 85 },
        { id: 3, items: ["jeans", "dress"], total: 100 },
      ],
    },
  },
  sectionNames: ["electronicsSection", "clothingSection"],
};
// You are required to extract the available quantity and price for laptops and shirts using multilevel destructuring.

// - Create a function named **`findProductDetails`** which takes the **`supermarketData`** object as input and returns an object containing the following details:

// {
//   laptopAvailable: // Number of laptops available,
//   shirtAvailable: // Number of shirts available,
//   laptopPrice: // Price of a laptop,
//   shirtPrice: // Price of a shirt,
// }
function findProductDetails(supermarketData) {
  // Destructuring to extract laptop and shirt details
  const {
    products: {
      electronicsSection: {
        inventory: {
          laptop: { available: laptopAvailable, price: laptopPrice },
        },
      },
      clothingSection: {
        inventory: {
          shirt: { available: shirtAvailable, price: shirtPrice },
        },
      },
    },
  } = supermarketData;

  // Return the extracted details as an object
  return {
    laptopAvailable,
    shirtAvailable,
    laptopPrice,
    shirtPrice,
  };
}

// Test the function
const productDetails = findProductDetails(supermarketData);
console.log(productDetails);
