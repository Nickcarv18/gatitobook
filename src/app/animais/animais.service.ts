import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Animais, Animal } from './animais';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $ } from 'protractor';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(
    private httpClient: HttpClient,
    private tokenServise: TokenService
  ) {}

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.tokenServise.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);

    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {
      headers,
    });
  }

  buscaPorId(id:number):Observable<Animal>{
    const token = this.tokenServise.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);

    return this.httpClient.get<Animal>(`${API}/photos/${id}`, {headers});
  }
}
