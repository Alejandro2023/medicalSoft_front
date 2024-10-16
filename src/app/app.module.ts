import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { UtilsModule } from './shared/utils/utils.module';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { AddTokenInterceptor } from './shared/utils/add-token.interceptor';
import { BaseFormDirective } from './directives/base-form.directive';
import { BaseListDirective } from './directives/base-list.directive';
import { BaseWrapperDirective } from './directives/base-wrapper.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BaseFormDirective,
    BaseListDirective,
    BaseWrapperDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UtilsModule,
    ToastrModule.forRoot(),
  ],
  exports: [SharedModule],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
