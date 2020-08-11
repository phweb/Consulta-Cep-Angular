import { Component } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';

import { CepService } from '../services/cep.service';
import { CEP } from '../models/cep';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  public myForm: FormGroup = new FormGroup({
    cepSearch: new FormControl()
  });
  public cep: CEP = new CEP();
  constructor(private cepService: CepService){

  }

  async search(){
    console.log(this.myForm.get('cepSearch').value);
    this.cep = await this.cepService.get(this.myForm.get('cepSearch').value);
    console.log(this.cep);
  }

}
