import { Component, OnInit } from '@angular/core';
import { BaseListDirective } from 'src/app/directives/base-list.directive';
import { PayrollService } from 'src/app/services/payroll.service';
import { ToastrService } from 'ngx-toastr';
import { UtilsModule } from 'src/app/shared/utils/utils.module';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.sass'],
})
export class EmployeesListComponent
  extends BaseListDirective
  implements OnInit
{
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

  override handleLoadData(data: []) {
    this.rows = data.filter((data: any) => {
      return data.status_;
    });
    this.loading = false;
  }
}
