import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {


  showform1 = false;

  selectform: string ='verification';
  constructor(){

  }

  onSubmit(){
    this.showform1=true ;
  }

  ngOnInit(): void {

    // setTimeout(() => {
    //   this.showform1 = false;
      
    // }, 2000);
    throw new Error('Method not implemented.');
  }

}
