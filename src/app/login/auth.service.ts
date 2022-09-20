import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if(usuario.email === 'debora@gmail.com' && usuario.senha === '123456a'){
      this.usuarioAutenticado = true;
      this.router.navigate(['/']);
    } else{
      this.usuarioAutenticado = false;
    }
  }
}
