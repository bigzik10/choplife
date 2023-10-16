import { Component } from '@angular/core';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css'],
})
export class UserTabComponent {
  // OTP modal
  OTPModal = false;

  items = [
    { name: 'google-logo', image: '../../assets/images/google-logo.svg' },
    { name: 'apple-logo', image: '../../assets/images/apple-logo.svg' },
    { name: 'facebook-logo', image: '../../assets/images/facebook-logo.svg' },
  ];

  // OTP modal
  // Method to open the "OTP" modal
  openOTPModal() {
    this.OTPModal = true;
  }

  // Method to close the "OTP" modal
  closeOTPModal() {
    this.OTPModal = false;
  }
}
