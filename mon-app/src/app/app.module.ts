import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './_shared/modules/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterPageComponent } from './register-page/register-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AdminModuleModule } from './admin-module/admin-module.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { JwtInterceptor } from './_shared/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './_shared/interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AdminModuleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
