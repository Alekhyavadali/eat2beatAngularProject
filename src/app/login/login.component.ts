import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private dataservice:DataService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
  userName:String='';
  Password:String='';
  i:number;
 onclickmainpage(){
   
 for(this. i=0;this.i<this.dataservice.registeredusers.length;this.i++){
    if((this.userName===this.dataservice.registeredusers[this.i].username)&&(this.Password===this.dataservice.registeredusers[this.i].password))
    {
           
      this.router.navigateByUrl('mainPage');
    break;
    }
    else{
      debugger;
      alert("Wrong Username or Password");
    }
  }
 
}
onclicksignup(){
  this.router.navigateByUrl('signup');
}


}
