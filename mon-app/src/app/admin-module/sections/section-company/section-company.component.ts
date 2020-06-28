import {Component, OnInit, ViewChild} from '@angular/core';
import {Company} from "../../../_shared/models/company";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-section-company',
  templateUrl: './section-company.component.html',
  styleUrls: ['./section-company.component.css']
})
export class SectionCompanyComponent implements OnInit {

  companies = new MatTableDataSource<Company>(ELEMENT_DATA);
  displayedColumns: string[] = ['id', 'number', 'type', 'commander', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.companies.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.companies.filter = filterValue.trim().toLowerCase();
  }

  getDetail(company: any) {
    this.router.navigate(['/admin', 'company', 'detail', company.id]);
  }

  deleteCompany(company: any) {
    // this.customerService.deleteCustomer(customer.id).subscribe(response => {
    //   window.location.reload();
    // }, error => {
    //   console.log(error);
    // });
  }

  openCreateDialog() {
    // const dialogConfig = new MatDialogConfig();
    //
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    //
    // const dialogRef = this.dialog.open(CreateCustomerComponent, dialogConfig);
    //
    // dialogRef.afterClosed().subscribe(
    //   data => this.customerService.createCustomer(data).subscribe(response => {
    //     window.location.reload();
    //   }, error => {
    //     console.log(error);
    //   })
    // );
  }

  openEditDialog(company: any) {
    // const dialogConfig = new MatDialogConfig();
    //
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    //
    // const dialogRef = this.dialog.open(UpdateCustomerComponent, dialogConfig);
    //
    // dialogRef.afterClosed().subscribe(
    //   data => this.customerService.updateCustomer(customer.id, data).subscribe(response => {
    //     window.location.reload();
    //   }, error => {
    //     console.log(error);
    //   })
    // );
  }
}

const ELEMENT_DATA: Company[] = [
  {id: 1, number: 9, type: "szklona", commander: "Misiejuk"},
  {id: 2, number: 3, type: "szklona", commander: "Rams"},
  {id: 3, number: 4, type: "szklona", commander: "Bawoł"},
  {id: 4, number: 5, type: "szklona", commander: "Pies"},
  {id: 5, number: 14, type: "szklona", commander: "Giga"}
]
