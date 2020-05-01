import { NgModule } from '@angular/core';


import { EmployeeRoutingModule } from './employee-routing.module';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeesComponent } from './list-employees.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    EmployeeRoutingModule,
    SharedModule
  ],
  declarations: [
    CreateEmployeeComponent,
    ListEmployeesComponent
  ]
  // exports: [ // Quand on exporte un component, il est disponible pour tous les modules qui import cette module (EmployeeModule)
    // CreateEmployeeComponent
  // ]
})
export class EmployeeModule { }
