import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

  onSubmit(form: any) {
    // Aqui você pode adicionar lógica de cadastro ou exibir mensagem
    alert('Cadastro realizado!');
  }
}
