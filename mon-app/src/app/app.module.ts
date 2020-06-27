import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterPageComponent } from './register-page/register-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AdminModuleModule } from './admin-module/admin-module.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {ButtonModule, PanelMenuModule, SidebarModule} from 'primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { JwtInterceptor } from './_shared/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './_shared/interceptors/error.interceptor';
import {SharedModule} from './_shared/modules/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModuleModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
