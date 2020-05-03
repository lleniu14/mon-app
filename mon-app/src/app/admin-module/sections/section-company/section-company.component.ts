import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/_shared/company';

@Component({
  selector: 'app-section-company',
  templateUrl: './section-company.component.html',
  styleUrls: ['./section-company.component.css']
})
export class SectionCompanyComponent implements OnInit {

  constructor() { }

  companies: Company[] = [
    {id: 1, number: 9, type: "szklona", commander: "Misiejuk"},
    {id: 2, number: 3, type: "szklona", commander: "Rams"},
    {id: 3, number: 4, type: "szklona", commander: "Bawoł"},
    {id: 4, number: 5, type: "szklona", commander: "Pies"},
    {id: 5, number: 14, type: "szklona", commander: "Giga"}
  ];

  ngOnInit(): void {
  }

}
