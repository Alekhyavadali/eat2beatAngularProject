import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
fullname:String;
username:String=null;
email:String;
address:String;
targetcalories:String;
phonenumber:number;
password:String;
registeredusers=[];
profile=false;
}
