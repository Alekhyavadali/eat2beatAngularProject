import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private dataservice:DataService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
clickmenu(){
  this.router.navigateByUrl('menu');
}
clickhome(){
  this.router.navigateByUrl('mainPage');
}
clickourvision(){
  this.router.navigateByUrl('ourvision');
}
clickorderonline(){
  this.router.navigateByUrl('orderonline');
}
clickprofile(){
  this.router.navigateByUrl('profile');
}
clicklogin(){
  this.router.navigateByUrl('login');
}
clicksignup(){
  this.router.navigateByUrl('signup');
}
clicklogout(){
  this.dataservice.username=null;
  this.router.navigateByUrl('mainPage');
}
}
