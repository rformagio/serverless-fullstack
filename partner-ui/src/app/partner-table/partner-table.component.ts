import { Component, OnInit, Input } from '@angular/core';
import { Partner } from '../partner'

@Component({
  selector: 'app-partner-table',
  templateUrl: './partner-table.component.html',
  styleUrls: ['./partner-table.component.css']
})
export class PartnerTableComponent implements OnInit {

  @Input() partners:Partner[] = [];

  constructor() { }

  ngOnInit() {
  }
}
