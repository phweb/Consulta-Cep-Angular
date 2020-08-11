import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CEP } from '../models/cep';

@Injectable({
  providedIn: 'root'
})
export class CepService{
  constructor(private http: HttpClient){

  }

  get(cep: string): Promise<CEP>{
    const newCep = cep.replace('-', '');
    return new Promise<CEP>((resolve) =>{
      this.http
        .get<CEP>(`https://viacep.com.br/ws/${newCep}/json/`)
        .subscribe((data) => resolve(data));
    });
  }
}
