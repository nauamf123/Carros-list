import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersComponent } from './customers.component';


const routes: Routes = [
    {
      path: '',
      component:  CustomersComponent,
      children: [
        {
          path: 'custumers-list',
          component: CustomersListComponent,
        },
      ],
    },
  ];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule,
    ],
  })
  export class CustomersRoutingModule {
  }