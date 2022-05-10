import { Especialidade } from './components/cadastro/contato-create/model/clinicaData';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  constructor(private readonly http: HttpClient,) { }

  buscaEspecialidades() : Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(
      `http://localhost:8081/especialidade`);
  }

  
}
