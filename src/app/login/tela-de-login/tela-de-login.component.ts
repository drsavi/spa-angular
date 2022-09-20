import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-tela-de-login',
  templateUrl: './tela-de-login.component.html',
  styles: [
  ]
})
export class TelaDeLoginComponent implements OnInit {
 
  public usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) {}

  ngOnInit() {}
  
  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
  }
}
