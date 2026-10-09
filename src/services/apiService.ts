import { NetworkError, ProductError } from "../utils/errorHandler.js";

export async function fetchProducts(): Promise<any[]> {
  try {

    // Test NetworkError: // "https://invalid.example.invalid/products" 
   // Test ProductError: // "https://dummyjson.com/invalid"
    
    // testing networkerror and producterror using diffrent url
    // const url ="https://invalid.example.invalid/products"
    // const url = "https://dummyjson.com/invalid"

    const url ="https://dummyjson.com/products"
    const response = await fetch(url);

    if (!response.ok) {
      throw new ProductError("Failed to fetch products");
    }
    const data = await response.json();
    return data.products;
  } catch (error: unknown) {
    if (error instanceof ProductError) {
      throw error;
    }
    throw new NetworkError("Network error: Unable to connect to server");
  }
}