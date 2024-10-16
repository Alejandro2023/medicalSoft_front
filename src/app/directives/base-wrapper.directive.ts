import { Directive } from '@angular/core';

@Directive({
  selector: '[appBaseWrapper]',
})
export class BaseWrapperDirective {
  globalValue: any = '';
  statusForm = {
    create: 0,
    list: 1,
    edit: 0,
    editId: 0,
    delete: 0,
  };

  toggleCreate(statusForm: any = this.statusForm) {
    this.statusForm = statusForm;
  }
  toggleEdit(statusForm: any = this.statusForm) {
    this.statusForm = statusForm;
  }

  toggleList(statusForm: any = this.statusForm) {
    this.statusForm = statusForm;
  }
}
