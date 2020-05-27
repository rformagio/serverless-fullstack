import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Partner } from '../partner';
import { PartnerService } from '../partner.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css']
})
export class PartnerFormComponent implements OnInit {

  partnerForm:FormGroup;
  partner:Partner = new Partner("", "", 0);

  errorMessage:string = '';

  @Output() onCreated: EventEmitter<any> = new EventEmitter();

  constructor(private fb:FormBuilder, private partnerService:PartnerService) {  }

  ngOnInit() {
    this.partnerForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      lastName: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      percentage: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(100)])]
    });
  }
 
  onSubmit(event) {
    this.clearMessage();
    event.preventDefault(); 
      this.partnerService
        .addPartner(this.partner)
        .subscribe(p => {
          this.onCreated.emit();
        },
          error => this.errorMessage = error.error.message);
    
  }

  clearMessage(){
    this.errorMessage = '';
  }
}
