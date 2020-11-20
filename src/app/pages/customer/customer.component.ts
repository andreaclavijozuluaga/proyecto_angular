import { Component, OnInit } from '@angular/core';
import { customerClass } from '../../../app/class/customer_class/customerClass';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public list: customerClass[];
  constructor() {
    this.list = [];
  }
  ngOnInit(): void {
    this.fill_list();
  }

  private fill_list() {
    for (let i = 1; i <= 5; i++) {
      var customer = new customerClass();
      customer.id = '1010' + i.toString();
      customer.nom = 'nombre' + i.toString();
      customer.fec_nac = new Date(new Date().setDate(i));
      customer.sal = 1000000 + i;
      this.list.push(customer);
    }
  }

}
