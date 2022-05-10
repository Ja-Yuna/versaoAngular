import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  htpp: any;

  constructor(private http: HttpClient) { }

  getAll(){
    return this.htpp.get('http://localhost:8081/usuario');
  }


  save(dados: any){

  }

 
}