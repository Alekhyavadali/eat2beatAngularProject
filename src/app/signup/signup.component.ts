import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private dataservice:DataService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
onclicksignup(){
 let  signupcredentials={
    fullname: this.dataservice.fullname,
    username:this.dataservice.username,
    email:this.dataservice.email,
    address:this.dataservice.address,
    targetcalories:this.dataservice.targetcalories,
    phonenumber:this.dataservice.phonenumber,
    password:this.dataservice.password
  };
  this.dataservice.registeredusers.push(signupcredentials);
  this.dataservice.profile=true; 
  this.router.navigateByUrl('mainPage');
}
onclicklogin(){
  
  this.router.navigateByUrl('login');
}


}
