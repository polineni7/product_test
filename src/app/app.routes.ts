import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard'; // Import the auth guard
import { CrudtestComponent } from './items/crudtest/crudtest.component';
import { DatabaseComponent } from './items/database/database.component';
import { DashboardComponent } from './items/dashboard/dashboard.component';
import { StopwatchComponent } from './items/stopwatch/stopwatch.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'crudtest', component: CrudtestComponent, canActivate: [AuthGuard] }, 
  { path:'database', component: DatabaseComponent, canActivate:[AuthGuard]},
  { path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path:'report', component: StopwatchComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
