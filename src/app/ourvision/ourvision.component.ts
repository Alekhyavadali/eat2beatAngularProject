import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourvision',
  templateUrl: './ourvision.component.html',
  styleUrls: ['./ourvision.component.css']
})
export class OurvisionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
