import { Component, OnInit } from '@angular/core';
import { BaseListDirective } from 'src/app/directives/base-list.directive';
import { PayrollService } from 'src/app/services/payroll.service';
import { ToastrService } from 'ngx-toastr';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-payroll-list',
  templateUrl: './payroll-list.component.html',
  styleUrls: ['./payroll-list.component.sass'],
})
export class PayrollListComponent extends BaseListDirective implements OnInit {
  isSummaryPayroll = false;
  rowsSummaryPayroll: any = null;

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

  override handleLoadData(data: any) {
    console.log(data);
    this.rows = data
      .filter((data: any) => {
        return data.status_;
      })
      .map((data: any) => {
        data.salary = Math.floor(data.salary);
        data.pension = data.salary * 0.04;
        data.health_insurance = data.salary * 0.04;
        data.sevarence_pay = data.salary * 0.0833;
        return data;
      });
    console.log(data);

    this.loading = false;
  }

  summaryPayroll(row: any) {
    this.isSummaryPayroll = true;
    this.rowsSummaryPayroll = row;
  }

  createPDF(row: any) {
    const pdfDefinition: any = {
      content: [
        {
          text: `Información de Nómina: ${row.name_}`,
          style: 'header',
        },
        {
          text: `Salario Base: $${row.salary}`,
          style: 'subheader',
        },
        {
          text: 'Deducciones Legales',
          style: 'subheader',
        },
        {
          table: {
            widths: ['*', 'auto'],
            body: [
              ['Descripción', 'Valor'],
              ['Salud (4%)', `$${row.salary * 0.04}`],
              ['Pensión (4%)', `$${row.salary * 0.04}`],
              [
                { text: 'Total Deducciones', bold: true },
                {
                  text: `$${row.salary * 0.08}`,
                  bold: true,
                },
              ],
            ],
          },
        },
        {
          text: 'Aportes del Empleador',
          style: 'subheader',
        },
        {
          table: {
            widths: ['*', 'auto'],
            body: [
              ['Descripción', 'Valor'],
              ['Salud (8.5%)', `$${row.salary * 0.085}`], // Aporte de salud
              ['Pensión (12%)', `$${row.salary * 0.12}`], // Aporte de pensión
              [
                { text: 'Total Aportes', bold: true },
                {
                  text: `$${row.salary * 0.205}`,
                  bold: true,
                },
              ],
            ],
          },
        },
        {
          text: 'Prestaciones Sociales',
          style: 'subheader',
        },
        {
          table: {
            widths: ['*', 'auto'],
            body: [
              ['Descripción', 'Valor'],
              ['Cesantías (8.33%)', `$${row.salary * 0.0833}`], // Cesantías
              [
                'Intereses sobre Cesantías (1%)',
                `$${row.salary * 0.0833 * 0.01}`,
              ], // Intereses sobre cesantías
              ['Prima de Servicios', `$${row.salary * 0.5}`], // Prima de servicios (suponiendo que es la mitad del salario)
              ['Vacaciones', `$${row.salary * 0.5}`], // Vacaciones (suponiendo que es la mitad del salario)
            ],
          },
        },
        {
          text: 'Cálculo del Salario Neto',
          style: 'subheader',
        },
        {
          table: {
            widths: ['*', 'auto'],
            body: [
              ['Descripción', 'Valor'],
              ['Salario Base', `$${row.salary}`], // Salario base
              ['- Total Deducciones', `$${row.salary * 0.08}`], // Total de deducciones
              ['+ Total Aportes', `$${row.salary * 0.205}`], // Total de aportes
              ['+ Prestaciones Sociales', `$${row.salary * 0.5833}`], // Total de prestaciones sociales
              ['+ Prima de Servicios', `$${row.salary * 0.5}`], // Prima de servicios
              ['+ Vacaciones', `$${row.salary * 0.5}`], // Vacaciones
              [
                { text: 'Salario Neto', bold: true },
                {
                  text: `$${row.salary * 1.5833}`,
                  bold: true,
                },
              ],
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5],
        },
      },
    };

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.download('nomina.pdf');
  }
}
