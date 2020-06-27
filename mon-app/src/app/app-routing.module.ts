import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'admin',
  loadChildren: () =>
    import('./admin-module/admin-module.module').then(
      m => m.AdminModuleModule
    ), canActivate: [AuthGuard]
},
{ path: 'login', component: LoginPageComponent },
{ path: 'register', component: RegisterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
