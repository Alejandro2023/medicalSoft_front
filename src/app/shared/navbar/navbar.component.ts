import { Component } from '@angular/core';
import { BaseListDirective } from 'src/app/directives/base-list.directive';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent extends BaseListDirective {
  ngOnInit(): void {
    this.globalValue = JSON.parse(localStorage.getItem('globalVariable') || '');
    this.listService = this.payrollService.menu();
    this.getItems();
  }

  override handleLoadData(data: any): void {
    data = data.filter((data: any) => {
      return data.type_ === 'NAVBAR';
    });
    super.handleLoadData(data);
  }
}
