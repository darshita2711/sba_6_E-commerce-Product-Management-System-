import { ProductError } from "../utils/errorHandler.js";

export async function fetchProducts(): Promise<any[]> {
    try {
        const url = "https://dummyjson.com/products"
        const response = await fetch(url);

        if (!response.ok) {
            throw new ProductError("Failed to fetch products");
        }
        const data = await response.json();
        return data.products;
    } catch (error: unknown) {
        if (error instanceof ProductError) { throw error; } throw error;
    }
}
