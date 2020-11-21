import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {UserModel} from '../model/user.model';
import {AuthService} from '../services/auth.service';
import {UserFirebaseService} from '../services/user-firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: UserModel;

  constructor(private router: Router, private autService: AuthService, private userFirebaseService: UserFirebaseService) {
    this.user = {name: 'test', password: 'password'};
  }

  ngOnInit(): void {
    this.user = {name: '', password: ''};
    if (localStorage.getItem('token') !== null) {
      this.router.navigate(['/list']);
    }
    this.test();
  }

  login(): void {
    this.autService.login(this.user).subscribe(
      data => {
        localStorage.setItem('token', data);
        this.router.navigate(['/list']);

      }
    );
  }

  test(): void {
    this.userFirebaseService.getUser(this.user.name).subscribe(data =>
      data.forEach(item => {
          const datos: UserModel = item.payload.doc.data();
          if (datos.password === this.user.password) {
            this.login();
          } else {
            alert('datos incorrectos');
          }
        }
      ));
  }
}
