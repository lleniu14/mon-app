import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_shared/services/auth.guard';
import { SectionCompanyComponent } from './sections/section-company/section-company.component';
import { SectionSoldierComponent } from './sections/section-soldier/section-soldier.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [
  {
    path: '', component: AdminModuleComponent,
    children: [
      { path: 'company', component: SectionCompanyComponent },
      { path: 'soldier', component: SectionSoldierComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
