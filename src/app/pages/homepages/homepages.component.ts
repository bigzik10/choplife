import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepages',
  templateUrl: './homepages.component.html',
  styleUrls: ['./homepages.component.css']
})
export class HomepagesComponent implements OnInit {


  logo1="../../../assets/images/Layer_x0020_1.svg";







  constructor(private router:Router){}



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  goto() {
    this.router.navigate(['/login']);
  }
}


