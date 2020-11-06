import { Component, OnInit } from '@angular/core';
import { CustomersServiceList } from './customers-list.service';



@Component({
  selector: 'ngx-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  constructor(public service : CustomersServiceList) { }

  ngOnInit(): void {
  }

}
