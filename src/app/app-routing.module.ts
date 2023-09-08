import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { AttendenceComponent } from './Pages/attendence/attendence.component';
import { AdvanceComponent } from './Pages/advance/advance.component';
import { LeavesComponent } from './Pages/leaves/leaves.component';
import { SalaryComponent } from './Pages/salary/salary.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    component: LayoutComponent,
    children  :[

      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'employee',
        component:EmployeeComponent
      },
      {
        path:'attendence',
        component:AttendenceComponent
      },
      {
        path:'advance',
        component:AdvanceComponent
      },
      {
        path:'leaves',
        component:LeavesComponent
      },
      {
        path:'salary',
        component:SalaryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
