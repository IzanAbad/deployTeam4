import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
<<<<<<< Updated upstream

  constructor() { }
=======
  form: any = {
    username: null,
    password: null
  };
  conf_password = "";
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = 'Los datos introducidos son incorrectos';

  constructor(private authService: AuthService, private router: Router) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
=======
  onSubmit(): void {
    const { username, password } = this.form;

    if(this.form.password==this.conf_password){
      this.authService.register(username, password).subscribe(
        data => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(["busqueda"]);
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }else{
      this.isSignUpFailed = true;
      this.isSuccessful = false;
    }
  }

>>>>>>> Stashed changes
}
