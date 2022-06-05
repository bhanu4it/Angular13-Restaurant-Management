import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurentData } from './restaurent.model';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css'],
})
export class RestaurentDashComponent implements OnInit {
  formValue!: FormGroup;
  restaurentModelObj : RestaurentData = new RestaurentData;

  constructor(private formBuilder: FormBuilder, private api:ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      emailid: new FormControl('', []),
      mobile: new FormControl('', []),
      address: [''],
      services: [''],
    });
  }

  //  Subscribing Data Here

 addRestaurent(){
  this.restaurentModelObj.name = this.formValue.value.name;
  this.restaurentModelObj.emailid = this.formValue.value.emailid;
  this.restaurentModelObj.mobile = this.formValue.value.mobile;
  this.restaurentModelObj.address = this.formValue.value.address;
  this.restaurentModelObj.services = this.formValue.value.services;

  this.api.createRestaurent(this.restaurentModelObj).subscribe(res=> {
    console.log(res);
    alert("Restaurent Data Added Successfully");
  }, 
  err => {
    alert("Something went wrong");
  })
}



}


