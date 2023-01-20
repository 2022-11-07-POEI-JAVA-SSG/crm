import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  public orders$: Observable<Order[]>;
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.orders$ = this.ordersService.collection$;
    this.headers = [
      'Type',
      'Client',
      'Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
  }
}
