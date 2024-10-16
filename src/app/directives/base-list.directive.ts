import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PayrollService } from '../services/payroll.service';
import { ToastrService } from 'ngx-toastr';
import { UtilsModule } from '../shared/utils/utils.module';

@Directive({
  selector: '[appBaseList]',
})
export class BaseListDirective {
  globalValue: any = null;
  loading = true;
  listService: Observable<any>;
  deleteService: Observable<any>;
  @Input() statusForm = { create: 0, edit: 0, editId: 0, list: 0, delete: 0 };
  @Output() statusFormEmit = new EventEmitter<any>();
  rows = [];
  selectedData: any[] = [];

  constructor(
    protected payrollService: PayrollService,
    protected toastr: ToastrService,
    protected utils: UtilsModule
  ) {
    this.listService = new Observable((observer) => {
      observer.next('');
    });
    this.deleteService = new Observable((observer) => {
      observer.next('');
    });
  }

  getItems() {
    this.listService.subscribe((data) => this.handleLoadData(data));
  }

  handleLoadData(data: []) {
    this.rows = data;
    this.loading = false;
  }

  edit(id: number) {
    this.statusFormEmit.emit({
      create: 0,
      edit: 1,
      editId: id,
      list: 0,
      delete: 0,
    });
  }

  delete(id: number) {
    this.deleteService = this.payrollService.employeeDelete(id);
    this.deleteService.subscribe((response) => this.getItems());
    this.toastr.success('Datos eliminados exitosamente', 'Datos eliminados');
  }
}
