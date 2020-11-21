import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {UserModel} from '../model/user.model';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: UserModel;

  constructor(private router: Router, private autService: AuthService) {

  }

  ngOnInit(): void {
    this.user = {name: '', password: ''};
    if (localStorage.getItem('token') !== null) {
      this.router.navigate(['/list']);
    }
  }

  login(): void {
    this.autService.login(this.user).subscribe(
      data => {
        localStorage.setItem('token', data);
        this.router.navigate(['/list']);

      }
    );
  }
}
