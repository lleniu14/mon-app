import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_shared/services/authentication.service';
import { User } from '../_shared/models/user';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.css']
})
export class AdminModuleComponent implements OnInit {

  currentUser: User;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { this.authenticationService.currentUser.subscribe(x => this.currentUser = x); }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
