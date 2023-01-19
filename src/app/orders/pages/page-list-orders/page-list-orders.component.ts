import { Component } from '@angular/core';
import { Order } from '../../models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  public headers: string[];
  public orders!: Order[];

  constructor(private ordersService: OrdersService) {
    this.headers = [
      'Type',
      'Client',
      'Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];

    this.ordersService.collection$.subscribe((data) => {
      this.orders = data;
      console.log(this.orders);
    });
  }
}
