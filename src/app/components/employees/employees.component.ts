import { Component, ViewChild } from '@angular/core';
import { BaseWrapperDirective } from 'src/app/directives/base-wrapper.directive';
import { EmployeesFormComponent } from './employees-form/employees-form.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass'],
})
export class EmployeesComponent extends BaseWrapperDirective {
  @ViewChild('employeeForm', { static: false }) form:
    | EmployeesFormComponent
    | undefined;
}
