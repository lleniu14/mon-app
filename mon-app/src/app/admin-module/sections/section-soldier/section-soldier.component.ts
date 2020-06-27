import { Component, OnInit } from '@angular/core';
import { Soldier } from 'src/app/_shared/models/soldier';

@Component({
  selector: 'app-section-soldier',
  templateUrl: './section-soldier.component.html',
  styleUrls: ['./section-soldier.component.css']
})
export class SectionSoldierComponent implements OnInit {

  constructor() { }

  soldiers: Soldier[] = [
    {id: 1, rank: "kpr.", firstname: "Michał", lastname: "Wałęga"},
    {id: 2, rank: "st.kpr.", firstname: "Adam", lastname: "Żyłka"},
    {id: 3, rank: "szer.", firstname: "Paweł", lastname: "Kubryn"},
  ]

  ngOnInit(): void {
  }

}
