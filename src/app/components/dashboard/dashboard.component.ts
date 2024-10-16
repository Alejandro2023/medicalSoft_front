import { Component, OnInit } from '@angular/core';
import { BaseListDirective } from 'src/app/directives/base-list.directive';
import { PayrollService } from 'src/app/services/payroll.service';
import { ToastrService } from 'ngx-toastr';
import { UtilsModule } from 'src/app/shared/utils/utils.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent extends BaseListDirective implements OnInit {
  constructor(
    payrollService: PayrollService,
    toast: ToastrService,
    utils: UtilsModule
  ) {
    super(payrollService, toast, utils);
  }

  ngOnInit(): void {
    this.listService = this.payrollService.employees();
    this.getItems();
  }
}
