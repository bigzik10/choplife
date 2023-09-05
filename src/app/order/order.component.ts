import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})




export class OrderComponent {

  //  orders can be replaced with api to fetch data
  // orders: any[] = [
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'kubwa',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'completed',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'wuse',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'failed',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'jabi',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'failed',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID1',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID2',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID3',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID4',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'failed',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'completed',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'ccompleted',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'completed',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   }
  // ]; // Replace with your actual data
  // displayedOrders: any[] = [
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'kubwa',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'completed',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'wuse',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'failed',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'jabi',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'failed',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID1',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID2',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID3',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID4',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'failed',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'completed',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'ccompleted',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'completed',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   },
  //   {
  //     id: 'LT-RTYUID',
  //     amount: '₦20,000.00',
  //     location: 'GWARIMPA',
  //     orderDate: '23 Feb. 2021 - 05:35 PM',
  //     status: 'PENDING',
  //     lastModified: '23 Feb. 2021 - 05:35 PM'
  //   }
  // ];
  // pageSize = 10;
  // currentPage = 1;
  // searchQuery: string = '';


  // getCountByStatus(status: string): number {
  //   return this.orders.filter(order => order.status === status).length;
  // }

  // getTotalOrdersCount(): number {
  //   return this.orders.length;
  // }

  // ngOnInit() {
  //   this.updateDisplayedOrders();
  // }

  // updateDisplayedOrders() {
  //   const startIndex = (this.currentPage - 1) * this.pageSize;
  //   this.displayedOrders = this.orders.slice(startIndex, startIndex + this.pageSize);
  // }

  // previousPage() {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.updateDisplayedOrders();
  //   }
  // }

  // nextPage() {
  //   const totalPages = Math.ceil(this.orders.length / this.pageSize);
  //   if (this.currentPage < totalPages) {
  //     this.currentPage++;
  //     this.updateDisplayedOrders();
  //   }
  // }

  // goToPage(pageNumber: number) {
  //   this.currentPage = pageNumber;
  //   this.updateDisplayedOrders();
  // }

  // get pageNumbers() {
  //   const totalPages = Math.ceil(this.orders.length / this.pageSize);
  //   return Array.from({ length: totalPages }, (_, i) => i + 1);
  // }

  // Add this function to generate CSV data
  
  

}
 








