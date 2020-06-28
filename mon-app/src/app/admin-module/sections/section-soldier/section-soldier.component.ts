import {Component, OnInit, ViewChild} from '@angular/core';
import { Soldier } from 'src/app/_shared/models/soldier';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-section-soldier',
  templateUrl: './section-soldier.component.html',
  styleUrls: ['./section-soldier.component.css']
})
export class SectionSoldierComponent implements OnInit {

  soldiers = new MatTableDataSource<Soldier>(ELEMENT_DATA);
  displayedColumns: string[] = ['id', 'rank', 'firstName', 'lastName', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.soldiers.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.soldiers.filter = filterValue.trim().toLowerCase();
  }
}

const ELEMENT_DATA: Soldier[] = [
  {id: 1, rank: "kpr.", firstName: "Michał", lastName: "Wałęga"},
  {id: 2, rank: "st.kpr.", firstName: "Adam", lastName: "Żyłka"},
  {id: 3, rank: "szer.", firstName: "Paweł", lastName: "Kubryn"},
]
