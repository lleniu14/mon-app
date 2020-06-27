import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { SectionCompanyComponent } from './sections/section-company/section-company.component';
import { SectionSoldierComponent } from './sections/section-soldier/section-soldier.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AdminModuleComponent,
    SectionCompanyComponent,
    SectionSoldierComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AdminModuleModule { }
