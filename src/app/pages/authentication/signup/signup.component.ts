import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  

  constructor(private router:Router){

  }





  activeform: string = 'verification';


  selectform: string ='';

  showform1 = false;

  showform2 = false;

  // showform2 = true;
// showform: any;

onSubmit(){
  this.showform1 = true;
  setTimeout(() => {
    this.showform1 = this.showform2;
    this.showform2 = true;
  }, 2000);
  // if (this.showform1 === true){
  //   this.showform2 = true;



  // }
}
  // isOffcanvasOpen: boolean = false;

  // toggleOffcanvas(): void {
  //   this.isOffcanvasOpen = !this.isOffcanvasOpen;
  // }

  // switchForm(vendor: string): void {
  //   this.activeform = vendor;
  // }
  ngOnInit(): void {

    //   setTimeout(() => {
    //   this.showform2 = thi;
      
    // }, 2000);
    throw new Error('Method not implemented.');
  }

}
