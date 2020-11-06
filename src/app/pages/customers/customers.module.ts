import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CustomersComponent } from './customers.component';

import { CustomersServiceList } from './customers-list/customers-list.service';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [
  CustomersComponent,
  CustomersServiceList
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    Ng2SmartTableModule,
    NbCardModule
  ]
})
export class CustumersModule { }
