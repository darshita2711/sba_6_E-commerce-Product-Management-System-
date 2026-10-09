export function calculateTax(price: number, tax = 4.45, category: string) {
    if (category == "groceries") {
        tax = 3
    }
    return price * (tax / 100);
}
