import { Component, OnInit } from '@angular/core';
import { Partner } from './partner';
import { PartnerService } from './partner.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'partner-ui';

  partners:Partner[] = [];

  constructor(private partnerService:PartnerService) { }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.partnerService
        .getPartners()
        .subscribe((res:any) => {
            this.partners = res.partners;
        }, error => console.log(error));
  }

  onPartnerSubmit(event) {
      this.updateData();
  }
}
