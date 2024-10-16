import { Component } from '@angular/core';
import { BaseFormDirective } from 'src/app/directives/base-form.directive';
import { PayrollService } from 'src/app/services/payroll.service';
import { ToastrService } from 'ngx-toastr';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.sass'],
})
export class EmployeesFormComponent extends BaseFormDirective {
  constructor(
    payrollService: PayrollService,
    toastr: ToastrService,
    utils: UtilsModule,
    fb: FormBuilder
  ) {
    super(payrollService, toastr, utils, fb);
  }

  override setSubmitMetods() {
    this.postService = this.PayrollService.employeePost(this.form.value);
    this.getItemService = this.PayrollService.employee(this.statusForm.editId);
    super.setSubmitMetods();
  }

  override validForm() {
    this.form = this.fb.group({
      name_: ['', [Validators.required, Validators.minLength(3)]],
      userDNI: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', [Validators.required, Validators.minLength(1)]],
      salary: ['', [Validators.required, Validators.minLength(1)]],
      join_date: ['', Validators.required],
    });
  }

  override formOperation() {
    this.form.value.join_date = this.utils.dateFormattedString(
      this.form.value.join_date
    );
    if (this.statusForm.create) {
      this.toastr.success('Datos guardados exitosamente', 'Datos guardados');
      this.postService.subscribe((response) => {
        this.cleanForm();
      });
    } else {
      this.getItemService.subscribe((data) => this.handleEditSuccess(data));
    }
  }

  override handleEditSuccess(data: any) {
    data.join_date = new Date(data.join_date);
    data.join_date.setDate(data.join_date.getDate() + 1);
    this.form.patchValue(data);
  }

  override saveUpdate(): void {
    this.form.value.join_date = this.utils.dateFormattedString(
      this.form.value.join_date
    );
    this.putService = this.PayrollService.employeePut(
      this.statusForm.editId,
      this.form.value
    );
    this.toastr.success('Datos actualizados exitosamente', 'Datos guardados');
    this.putService.subscribe((response) => {
      this.cleanForm();
    });
  }

  get invalidName() {
    return this.form.get('name_')?.invalid && this.form.get('name_')?.touched;
  }
  get invalidUserDNI() {
    return (
      this.form.get('userDNI')?.invalid && this.form.get('userDNI')?.touched
    );
  }
  get invalidRole() {
    return this.form.get('role')?.invalid && this.form.get('role')?.touched;
  }
  get invalidSalary() {
    return this.form.get('salary')?.invalid && this.form.get('salary')?.touched;
  }
  get invalidDate() {
    return (
      this.form.get('join_date')?.invalid && this.form.get('join_date')?.touched
    );
  }
}
