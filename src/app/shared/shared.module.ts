import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { KnobModule } from 'primeng/knob';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { TabMenuModule } from 'primeng/tabmenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SelectButtonModule,
    KnobModule,
    InputNumberModule,
    DropdownModule,
    ButtonModule,
    RippleModule,
    TableModule,
    TooltipModule,
    DialogModule,
    MultiSelectModule,
    ImageModule,
    TagModule,
    TabMenuModule,
    ScrollPanelModule,
    CardModule,
    SidebarModule,
    CalendarModule,
  ],
  exports: [
    SelectButtonModule,
    KnobModule,
    InputNumberModule,
    DropdownModule,
    ButtonModule,
    RippleModule,
    TableModule,
    TooltipModule,
    DialogModule,
    MultiSelectModule,
    ImageModule,
    TagModule,
    TabMenuModule,
    ScrollPanelModule,
    CardModule,
    SidebarModule,
    CalendarModule,
    NavbarComponent,
  ],
})
export class SharedModule {}
