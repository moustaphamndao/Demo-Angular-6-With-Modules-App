import { NgModule } from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { CustomPreloadingService } from './custom-preloading.service';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // tslint:disable-next-line:max-line-length
  {path: 'employees', data: {preload: true }, loadChildren: './employee/employee.module#EmployeeModule'}, // Ici c pour le lazy loading du module employee
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: CustomPreloadingService})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
