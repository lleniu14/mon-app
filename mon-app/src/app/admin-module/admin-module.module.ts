import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { SectionCompanyComponent } from './sections/section-company/section-company.component';
import { SectionSoldierComponent } from './sections/section-soldier/section-soldier.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    SectionCompanyComponent,
    SectionSoldierComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
