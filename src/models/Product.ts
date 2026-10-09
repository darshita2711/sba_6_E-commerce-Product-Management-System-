import { calculateDiscount } from "../utils/discountCalculator.js";


export class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    category: string;

    constructor(id: number,title: string,description: string,price: number,discountPercentage: number,category: string) 
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
    }

    getPriceWithDiscount() {
        let discount = calculateDiscount(this.price, this.discountPercentage)
        return this.price - discount;
    }

    displayDetails() {
        console.log("..........Product Details..........")
        console.log("Id:", this.id);
        console.log("Product:", this.title);
        console.log("Description:", this.description);
        console.log("Category:", this.category);
        console.log("Price:", this.price);
        console.log("Discounted Price:", this.getPriceWithDiscount());
    }
}