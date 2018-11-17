import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  enableAdd = false;
  showExtended = false;
  currentClasses = {};
  currentStyles = {};

  constructor() { }

  ngOnInit() {
    this.users = [ {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main St',
          city: 'Boston',
          state: 'MA'
        },
      image: 'https://placeimg.com/600/600/people/1',
      isActive: true,
      registered: new Date('01/02/2018 08:30:00')
    },
      {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 20,
        address: {
          street: '22 Popplar Ave',
          city: 'Pheonix',
          state: 'AZ'
        },
        image: 'https://placeimg.com/600/600/people/2',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 23,
        address: {
          street: '5 Wellington Dr',
          city: 'Richmond',
          state: 'VA'
        },
        image: 'https://placeimg.com/600/600/people/3',
        isActive: false,
        registered: new Date('01/02/2018 08:30:00')
      },
    ];
    this.addUser({
      firstName: 'Amanda',
      lastName: 'Knox',
      age: 45,
      address: {
        street: '6 Ok St',
        city: 'Oakland',
        state: 'CA'
      },
      image: 'https://placeimg.com/600/600/people/4',
      isActive: false,
      registered: new Date('01/02/2018 08:30:00')
    });
    this.setCurrentClasses();
    this.setCurrentStyles();
  }
  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd
    };
  }
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ?  '0' : '40px',
      'text-transform': this.showExtended ? 'uppercase' : ''
    };
  }
}

