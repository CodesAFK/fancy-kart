import { Component } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => this.user = user ); // Set user equal to currently logged user of undef if no user
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
