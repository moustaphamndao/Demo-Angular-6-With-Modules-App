import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './list-employees.component';
import { CreateEmployeeComponent } from './create-employee.component';


const appRoutes: Routes = [
    // {
    // path: 'employees', children: [ C'etait pour le meme prefixe mais sans le lazyloading
    { path: '', component: ListEmployeesComponent },
    { path: 'create', component: CreateEmployeeComponent },
    { path: 'edit/:id', component: CreateEmployeeComponent }
    // ]
    // }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
