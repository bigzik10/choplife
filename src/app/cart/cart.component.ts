import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: any[] = [
    { name: 'Hot Big Plantain', price: 1400, quantity: 1 },
    { name: 'A use case where the item name breaks in two or more line', price: 1000, quantity: 1 },
    { name: 'Shawarma', price: 3000, quantity: 1 },
    // Add more items as needed
  ];
  deliveryFeePerItem = 400; // Set the delivery fee per item

  // Add a flag to control cart visibility
  isCartOpen: boolean = true;
  isCheckoutOpen: boolean = false;
  isPaymentSuccessful: boolean = false;
  

  getTotalItemsInCart(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }
  quantity: number = 1; // Initialize the quantity to 1

    // Function to decrease the quantity
    decreaseQuantity(item: any) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    }
  
    // Function to increase the quantity
    increaseQuantity(item: any) {
      item.quantity++;
    }

    removeItem(item: any): void {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }

    calculateTotal(): number {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    // Function to calculate the subtotal for the entire cart
  calculateSubtotal(): number {
    let subtotal = 0;
    for (const item of this.items) {
      subtotal += item.price * item.quantity;
    }
    return subtotal;
  }

  // Function to calculate the VAT for the entire cart
  calculateVAT(): number {
    // You can adjust the VAT calculation logic as needed
    const vatRate = 0.05; // Assuming a VAT rate of 5%
    const subtotal = this.calculateSubtotal();
    return subtotal * vatRate;
  }

  // Function to calculate the total cost including subtotal, VAT, and delivery fee
  calculateCheckTotal(): number {
    const subtotal = this.calculateSubtotal();
    const vat = this.calculateVAT();
    const deliveryFee = this.deliveryFeePerItem * this.items.length;
    return subtotal + vat + deliveryFee;
  }

    clearCart(): void {
      this.items = []; // Clear the items array
    }
 

  // Function to close the cart
  closeCart() {
    this.isCartOpen = false;
  }

  // Function to open the cart
  openCart() {
    this.isCartOpen = true;
  }
  
  // Function to open the checkout view
  openCheckout() {
    this.isCheckoutOpen = true;
     // Close the cart view when opening the checkout
     this.closeCart();
  }

  // Function to go back from checkout to cart
  backToCart() {
    this.isCheckoutOpen = false;
    // Open the cart view when going back
    this.openCart();
  }

  completePayment() {
    this.isPaymentSuccessful = true;
    this.isCheckoutOpen = false;
  }
  
  
  
  
  
}
