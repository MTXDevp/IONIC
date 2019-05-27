import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionnHomeComponenteService {

  private numTemplate : string = '1';

  constructor() { 


  }
  setVariable(numT){
    this.numTemplate = numT;
  }

  GetVariable(){
    return this.numTemplate;
  }
}
