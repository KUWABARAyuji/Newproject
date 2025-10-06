
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  senha = '';
  erro = '';

  constructor(private router: Router) { }

  ngOnInit(): void {}

  onSubmit(form: any) {
    this.erro = '';
    if (this.email === 'admin' && this.senha === 'admin') {
      this.router.navigate(['/home']);
    } else {
      this.erro = 'Usuário ou senha inválidos';
    }
  }
}
