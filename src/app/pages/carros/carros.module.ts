import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CarrosListComponent } from './carros-list/carros-list.component';
import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosComponent } from './carros.componente';

@NgModule({
  declarations: [
   CarrosListComponent,
   CarrosComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    Ng2SmartTableModule,
    NbCardModule
  ]
})
export class CarrosModule { }
