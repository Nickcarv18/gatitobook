import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenServise: TokenService)
  {
    if(this.tokenServise.possuiToken()){
      this.decodificaJWT();
    }
  }

  private decodificaJWT(){
    const token = this.tokenServise.retornaToken();

    const usuario = jwt_decode(token) as Usuario;

    this.usuarioSubject.next(usuario);
  }

  retornaUsuario(){
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token:string){
    this.tokenServise.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenServise.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado(){
    return this.tokenServise.possuiToken();
  }
}
