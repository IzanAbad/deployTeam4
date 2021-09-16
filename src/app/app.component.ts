import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel Searcher';
<<<<<<< Updated upstream
  isLoggedIn = true;
=======
  currentUser = '';
  isLoggedIn = false;

  constructor() { }
>>>>>>> Stashed changes

  logOut(){
    this.isLoggedIn=false;
  }
}
