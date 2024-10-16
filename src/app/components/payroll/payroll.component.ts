import { Component, ViewChild } from '@angular/core';
import { BaseWrapperDirective } from 'src/app/directives/base-wrapper.directive';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.sass'],
})
export class PayrollComponent extends BaseWrapperDirective {}
