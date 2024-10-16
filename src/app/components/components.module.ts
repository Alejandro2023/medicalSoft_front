import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesFormComponent } from './employees/employees-form/employees-form.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { PayrollComponent } from './payroll/payroll.component';
import { PayrollListComponent } from './payroll/payroll-list/payroll-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesFormComponent,
    EmployeesListComponent,
    PayrollComponent,
    PayrollListComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ComponentsRoutingModule,
  ],
  exports: [
    CommonModule,
    SharedModule,
    ComponentsRoutingModule,
    EmployeesComponent,
    EmployeesFormComponent,
    EmployeesListComponent,
  ],
})
export class ComponentsModule {}
