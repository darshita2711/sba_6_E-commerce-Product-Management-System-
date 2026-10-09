import { Product } from "./models/Product.js";
import { fetchProducts } from "./services/apiService.js";
import { NetworkError, ProductError } from "./utils/errorHandler.js";

async function main(): Promise<void> {
  try {
    const data = await fetchProducts();

    console.log("Total products:", data.length);

    for (const item of data) {
      const product = new Product(
        item.id,
        item.title,
        item.description,
        item.price,
        item.discountPercentage,
        item.category
      );

      product.displayDetails();
    }
  } catch (error: unknown) {
    if (error instanceof ProductError) {
      console.log("Product Error:", error.message);
    } else {
     console.log("Error:", error);
    }
  }
}

main();
