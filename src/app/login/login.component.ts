import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {UserModel} from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: UserModel;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.user = {name: '', password: ''};
  }

  login(): void {
    if (this.user.name === 'rfalconi@unibe.edu.ec' && this.user.password === '12345') {
      this.router.navigate(['/list']);
    } else {
      alert('datos incorrectos');
    }
  }
}
