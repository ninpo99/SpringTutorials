import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  street:string;
  address:Address;
  hobbies:string[];

  constructor() { 
    console.log('Constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'John Doe';
    this.age = 29;
    this.address = {
      street  : '50 Main St.',
      city : 'San Antonio',
      state : 'Texas'
    }
    this.hobbies = ['Write Code', 'Watch Movies', 'Listen to music']
  }

}
interface Address{
  street:string,
  city:string,
  state:string
}
