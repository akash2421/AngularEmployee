import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { AttendenceComponent } from './Pages/attendence/attendence.component';
import { AdvanceComponent } from './Pages/advance/advance.component';
import { LeavesComponent } from './Pages/leaves/leaves.component';
import { SalaryComponent } from './Pages/salary/salary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    EmployeeComponent,
    AttendenceComponent,
    AdvanceComponent,
    LeavesComponent,
    SalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
